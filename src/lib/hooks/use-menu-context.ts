import { useContext } from "react";
import { MenuContext } from "../context/menu-context";


export const useMenuContext = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu must be used within a MenuProvider");
  }
  return context;
};