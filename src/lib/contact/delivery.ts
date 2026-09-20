import type { ContactDetails } from "./validation";
import type { DeliveryResult } from "./types";
import { deliverEmail } from "./email";
import { deliverTelegram } from "./telegram";

export type { DeliveryResult } from "./types";

/** Telegram is primary when configured; the existing email service is fallback. */
export async function deliverContact(
  details: ContactDetails,
  requestId: string,
): Promise<DeliveryResult> {
  const telegramConfigured = Boolean(
    process.env.TELEGRAM_BOT_TOKEN?.trim() ||
      process.env.TELEGRAM_CHAT_ID?.trim(),
  );
  let telegramResult: DeliveryResult | undefined;
  if (telegramConfigured) {
    telegramResult = await deliverTelegram(details, requestId);
    if (telegramResult.ok) return telegramResult;
    // Never log API URLs, tokens, customer data or raw provider errors.
    console.warn("Contact Telegram delivery failed:", telegramResult.reason);
  }
  const emailResult = await deliverEmail(details, requestId);
  if (emailResult.ok) return emailResult;
  return {
    ok: false,
    reason:
      (telegramResult &&
        !telegramResult.ok &&
        telegramResult.reason === "provider") ||
      emailResult.reason === "provider"
        ? "provider"
        : "configuration",
  };
}
