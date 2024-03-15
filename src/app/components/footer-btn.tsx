"use client";

import React from "react";
import { FiPhoneIncoming } from "react-icons/fi";
import { useModalContext } from "@/lib/hooks/use-modal-context";

export default function FooterBtn() {
  const { toggleModal } = useModalContext();

  return (
    <button
      onClick={toggleModal}
      type="button"
      className="mb-5 sm:mb-0 underline outline-none flex gap-1 justify-center items-center focus:text-orange-500 hover:text-orange-500 transition cursor-pointer"
    >
      <FiPhoneIncoming size={24} /> Перезвоните мне
    </button>
  );
}
