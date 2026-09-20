import { createHash } from "node:crypto";
import { site } from "@/content/site";
import { validateContact } from "./validation";
import { createRateLimiter } from "./rate-limit";
import { deliverContact } from "./delivery";

const maxBodyBytes = 8192;
const failure =
  "Не вдалося надіслати запит. Спробуйте ще раз або зателефонуйте до майстерні.";
const json = (
  body: object,
  status: number,
  headers: Record<string, string> = {},
) =>
  Response.json(body, {
    status,
    headers: { "Cache-Control": "no-store", ...headers },
  });

// Stream the body with a hard limit, including requests without Content-Length.
async function readBody(request: Request): Promise<string> {
  const reader = request.body?.getReader();
  if (!reader) return "";
  const decoder = new TextDecoder();
  let size = 0,
    text = "";
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > maxBodyBytes) {
        await reader.cancel();
        throw new RangeError("Request too large");
      }
      text += decoder.decode(value, { stream: true });
    }
    return text + decoder.decode();
  } finally {
    reader.releaseLock();
  }
}

export function createContactHandler({
  deliver = deliverContact,
  limit = createRateLimiter(),
} = {}) {
  return async function POST(request: Request): Promise<Response> {
    const origin = request.headers.get("origin");
    if (origin && origin !== new URL(request.url).origin && origin !== site.url)
      return json({ error: "Недозволене джерело запиту." }, 403);
    if (
      !request.headers
        .get("content-type")
        ?.toLowerCase()
        .startsWith("application/json")
    )
      return json({ error: "Очікується JSON." }, 415);
    let input: unknown;
    try {
      input = JSON.parse(await readBody(request));
    } catch (error) {
      return json(
        { error: "Перевірте дані форми." },
        error instanceof RangeError ? 413 : 400,
      );
    }
    if (!input || typeof input !== "object" || Array.isArray(input))
      return json({ error: "Перевірте дані форми." }, 400);
    const data = input as Record<string, unknown>;
    // A bot fills this off-screen field. Never send the spam to the workshop.
    if (data.website) return json({ ok: true }, 200);
    const validated = validateContact(data);
    if (!validated.ok) return json({ error: validated.error }, 400);
    if (
      typeof data.requestId !== "string" ||
      !/^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/i.test(
        data.requestId,
      )
    )
      return json({ error: "Оновіть сторінку та повторіть запит." }, 400);
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim();
    const key = createHash("sha256")
      .update(ip || validated.value.phone)
      .digest("hex");
    const retryAfter = limit(key);
    if (retryAfter)
      return json(
        {
          error:
            "Забагато запитів. Спробуйте трохи пізніше або зателефонуйте нам.",
        },
        429,
        { "Retry-After": String(retryAfter) },
      );
    const result = await deliver(validated.value, data.requestId);
    if (!result.ok) {
      // Do not log customer names, phone numbers, email bodies or credentials.
      console.error("Contact delivery failed:", result.reason);
      return json(
        { error: failure },
        result.reason === "configuration" ? 503 : 502,
      );
    }
    return json({ ok: true }, 200);
  };
}
