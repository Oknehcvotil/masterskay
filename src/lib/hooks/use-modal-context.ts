import { useContext } from "react";
import { ModalContext } from "../context/modal-context";

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
