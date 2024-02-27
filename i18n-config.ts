export const i18n = {
  defaultLocale: "ua",
  locales: ["ua", "en", "ru"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
