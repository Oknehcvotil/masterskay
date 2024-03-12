"use client";

import React, { createContext, useContext, useState } from "react";

type ModalContextProps = {
  isModalOpen: boolean;
  toggleModal: () => void;
  closeModal: () => void;
};

type ModalProviderProps = {
  children: React.ReactNode;
};

export const ModalContext = createContext<ModalContextProps | undefined>(
  undefined
);

export default function ModalProvider({ children }: ModalProviderProps) {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        toggleModal,
        closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
