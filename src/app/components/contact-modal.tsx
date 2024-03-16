"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import ModalContactForm from "./modal-contact-form";

const modalVariants: Variants = {
  open: {
    visibility: "visible",
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.2,
      duration: 0.3,
    },
  },
  closed: {
    opacity: 0,
    scale: 0.2,
    visibility: "hidden",
    transition: {
      delay: 0.2,
      duration: 0.3,
      visibility: { delay: 0.5, duration: 0 },
    },
  },
};

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  return (
    <motion.div
      variants={modalVariants}
      initial={"closed"}
      animate={isOpen ? "open" : "closed"}
      className="fixed top-0 left-0 h-screen w-full z-[1000] bg-black bg-opacity-60"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="absolute z-[1010] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg p-6"
      >
        <button
          type="button"
          className="absolute top-2 right-2 outline-none text-orange-600 focus:text-orange-700 hover:text-orange-700 active:scale-105"
          onClick={onClose}
        >
          <IoMdClose />
        </button>
        <h3 className="text-center mb-5">
          Оставьте ваши контактные данные и мы с вами свяжемся
        </h3>
        <ModalContactForm />
      </div>
    </motion.div>
  );
}
