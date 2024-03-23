import { Pathnames } from "next-intl/navigation";

export const locales = ["ua", "ru"] as const;

export const pathnames = {
  "/": "/ua",
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
