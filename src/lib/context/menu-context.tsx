"use client";

import React, { createContext, useContext, useState } from "react";

type MenuContextProps = {
  isMenuOpen: boolean;
  isServicesMenuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
  toggleServicesMenu: () => void;
  closeServicesMenu: () => void;
};

type MenuProviderProps = {
  children: React.ReactNode;
};

export const MenuContext = createContext<MenuContextProps | undefined>(undefined);

export default function MenuProvider({ children }: MenuProviderProps) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isServicesMenuOpen, setServicesMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleServicesMenu = () => {
    setServicesMenuOpen(!isServicesMenuOpen);
  };

  const closeServicesMenu = () => {
    setServicesMenuOpen(false);
  };

  return (
    <MenuContext.Provider
      value={{
        isMenuOpen,
        isServicesMenuOpen,
        toggleMenu,
        closeMenu,
        toggleServicesMenu,
        closeServicesMenu,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}


