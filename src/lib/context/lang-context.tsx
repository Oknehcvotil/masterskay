"use client";

import React, { createContext } from "react";
import type { Locale } from "@/i18n";

type LangContextType = {
  lang: Locale;
};

type LangProviderProps = {
  lang: Locale;
  children: React.ReactNode;
};

export const LangContext = createContext<LangContextType | undefined>(
  undefined
);

export default function LangProvider({ lang, children }: LangProviderProps) {
  return (
    <LangContext.Provider value={{ lang }}>{children}</LangContext.Provider>
  );
}
