import { Pathnames } from "next-intl/navigation";

export const locales = ["ua", "ru"] as const;

export const pathnames = {
  "/": "/",
  "/pathnames": {
    ua: "/ua",
    ru: "/ru",
  },
} satisfies Pathnames<typeof locales>;

// Используйте по умолчанию: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
