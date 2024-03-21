export const locales = ["ua", "ru"] as const;

export const pathnames = {
  "/": "/ua", 
  "/pathnames": {
    ua: "/ua",
    ru: "/ru",
  },
};

export const localePrefix = "/ua";

export type AppPathnames = keyof typeof pathnames;
