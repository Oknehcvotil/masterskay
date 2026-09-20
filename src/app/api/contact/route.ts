import { createContactHandler } from "@/lib/contact/handler";

// Allow the Telegram timeout followed by the email fallback.
export const maxDuration = 30;
export const runtime = "nodejs";
export const POST = createContactHandler();
