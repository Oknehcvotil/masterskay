import "server-only";

interface Dictionaries {
  [key: string]: () => Promise<any>;
}

const dictionaries: Dictionaries = {
  ua: () => import("./ua.json").then((module) => module.default),
  en: () => import("./en.json").then((module) => module.default),
  ru: () => import("./ru.json").then((module) => module.default),
};

export const getDictionary = async (locale: string) => dictionaries[locale]();
