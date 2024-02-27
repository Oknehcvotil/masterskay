import "server-only";
import type { Locale } from "@/src/lib/utils/i18n-config";

const dictionaries = {
  ua: () => import("../dictionaries/ua.json").then((module) => module.default),
  en: () => import("../dictionaries/en.json").then((module) => module.default),
  ru: () => import("../dictionaries/ru.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.ua();
