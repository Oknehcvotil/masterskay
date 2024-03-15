"use client";

import React from "react";
import { motion } from "framer-motion";
import ContactModalBtn from "./contact-modal-btn";
import { useModalContext } from "@/lib/hooks/use-modal-context";

export default function Hero() {
  const { toggleModal } = useModalContext();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="px-2 relative md:bg-fixed h-[700px] xl:h-[1120px] bg-hero bg-no-repeat bg-cover bg-center"
    >
      <div className="pt-[4.5rem] flex items-center justify-center h-full md:justify-end md:w-full md:items-stretch max-w-[64rem] mx-auto">
        <div className="flex flex-col items-center md:mt-[75px]">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="font-medium md:text-2xl md:w-[400px] text-center text-gray-100 mb-14 rounded-full outline-none"
          >
            Мастерская{" "}
            <span className="font-bold">по шитью и ремонту одежды</span>:
            качественный пошив, профессиональный ремонт.{" "}
            <span className="font-bold">Восстановление и ремонт обуви</span>,
            растяжка для вашего комфорта.{" "}
            <span className="font-bold">
              Изготовление ключей и заточка ножей
            </span>
            . Воплощаем ваш стиль, обеспечиваем долговечность ваших вещей.
          </motion.h1>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <ContactModalBtn onClick={toggleModal} />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
