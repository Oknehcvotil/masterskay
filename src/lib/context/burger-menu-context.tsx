"use client";

import React, { createContext, useContext, useState } from "react";

type BurgerMenuContextProps = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
};

type BurgerMenuProviderProps = {
  children: React.ReactNode;
};

const BurgerMenuContext = createContext<BurgerMenuContextProps | undefined>(
  undefined
);

export default function BurgerMenuProvider({
  children,
}: BurgerMenuProviderProps) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <BurgerMenuContext.Provider value={{ isMenuOpen, toggleMenu }}>
      {children}
    </BurgerMenuContext.Provider>
  );
}

export const useBurgerMenu = () => {
  const context = useContext(BurgerMenuContext);
  if (!context) {
    throw new Error("useBurgerMenu must be used within a BurgerMenuProvider");
  }
  return context;
};
