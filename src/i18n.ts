import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { locales } from "./config";

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  let messages;
  if (locale === "ua") {
    // When using Turbopack, this will enable HMR for `en`
    const uaMessages = await import("./messages/ua.json");
    messages = uaMessages.default;
  } else {
    const ruMessages = await import("./messages/ru.json");
    messages = ruMessages.default;
  }

  return {
    messages: messages,
  };
});

export type Locale = "ua" | "ru";
