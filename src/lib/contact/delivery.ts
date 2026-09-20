import type { ContactDetails } from "./validation";

export type DeliveryResult =
  | { ok: true }
  | { ok: false; reason: "configuration" | "provider" };

/** Server-only module. The browser never receives these environment variables. */
export async function deliverContact(
  details: ContactDetails,
  requestId: string,
): Promise<DeliveryResult> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { ok: false, reason: "configuration" };
  // Defaults preserve the original site's integration and recipient.
  const to = process.env.CONTACT_EMAIL_TO || "litovchenko.inna1970@gmail.com";
  const from =
    process.env.CONTACT_EMAIL_FROM ||
    "Майстерня на Фонтані <onboarding@resend.dev>";
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": `contact/${requestId}`,
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject: "Новий запит із сайту майстерні",
        text: `Ім’я: ${details.name}\nТелефон: ${details.phone}\n\nЗапит:\n${details.message || "Клієнт просить передзвонити."}`,
      }),
      signal: AbortSignal.timeout(10_000),
    });
    const payload = await response.json();
    // A resolved HTTP call alone is not proof of acceptance by the email service.
    if (!response.ok || typeof payload.id !== "string" || !payload.id)
      return { ok: false, reason: "provider" };
    return { ok: true };
  } catch {
    return { ok: false, reason: "provider" };
  }
}
