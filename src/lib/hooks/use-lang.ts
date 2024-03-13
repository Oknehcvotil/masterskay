import { useContext } from "react";
import { LangContext } from "../context/lang-context";

export const useLang = () => {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error("useLang must be used within a LangProvider");
    }

  return context;
};
