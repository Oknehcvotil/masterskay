import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

// Can be imported from a shared config
const locales = ["ua", "ru"];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  let messages;
  if (locale === "ua") {
    messages = require("../messages/ua.json");
  } else if (locale === "ru") {
    messages = require("../messages/ru.json");
  } else {
    // Handle other cases if needed
    notFound();
  }

  return {
    messages: messages.default || messages, // Adjust if needed based on how your messages are exported
  };
});

export type Locale = "ua" | "ru";
