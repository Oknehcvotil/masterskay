import { createHash } from "node:crypto";
import type { ContactDetails } from "./validation";
import type { DeliveryResult } from "./types";

// Best effort within one server instance, not a durable/global delivery queue.
const deliveries = new Map<
  string,
  { expires: number; result: Promise<DeliveryResult> }
>();
const cacheTtl = 10 * 60_000;
const maxEntries = 500;

async function sendTelegram(
  token: string,
  chatId: string,
  details: ContactDetails,
  requestId: string,
): Promise<DeliveryResult> {
  try {
    const response = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          // Plain text: customer input cannot inject HTML or Markdown formatting.
          text: [
            "Новий запит — Майстерня на Фонтані",
            "",
            `Ім’я: ${details.name}`,
            `Телефон: ${details.phone}`,
            "",
            "Запит:",
            details.message || "Клієнт просить передзвонити.",
            "",
            `Номер запиту: ${requestId}`,
          ].join("\n"),
          link_preview_options: { is_disabled: true },
        }),
        signal: AbortSignal.timeout(8_000),
        cache: "no-store",
      },
    );
    const payload = await response.json();
    if (
      !response.ok ||
      payload?.ok !== true ||
      !Number.isInteger(payload?.result?.message_id)
    )
      return { ok: false, reason: "provider" };
    return { ok: true };
  } catch {
    // Fetch errors can contain the token in the URL. Never log the exception.
    return { ok: false, reason: "provider" };
  }
}

export async function deliverTelegram(
  details: ContactDetails,
  requestId: string,
): Promise<DeliveryResult> {
  const token = process.env.TELEGRAM_BOT_TOKEN?.trim();
  const chatId = process.env.TELEGRAM_CHAT_ID?.trim();
  if (
    !token ||
    !/^\d+:[A-Za-z0-9_-]+$/.test(token) ||
    !chatId ||
    !/^-?[1-9]\d*$/.test(chatId)
  )
    return { ok: false, reason: "configuration" };
  const now = Date.now();
  for (const [key, entry] of deliveries) {
    if (entry.expires <= now) deliveries.delete(key);
  }
  const key = createHash("sha256")
    .update(JSON.stringify([token, chatId, requestId, details]))
    .digest("hex");
  const existing = deliveries.get(key);
  if (existing) return existing.result;
  if (deliveries.size >= maxEntries)
    deliveries.delete(deliveries.keys().next().value!);
  const result = sendTelegram(token, chatId, details, requestId);
  deliveries.set(key, { expires: now + cacheTtl, result });
  const outcome = await result;
  if (!outcome.ok) deliveries.delete(key);
  return outcome;
}
