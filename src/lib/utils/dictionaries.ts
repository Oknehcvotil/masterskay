import "server-only";
import type { Locale } from "@/src/lib/utils/i18n-config";

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  ua: () =>
    import("../../dictionaries/ua.json").then((module) => module.default),
  en: () =>
    import("../../dictionaries/en.json").then((module) => module.default),
  ru: () =>
    import("../../dictionaries/ru.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.ua();
