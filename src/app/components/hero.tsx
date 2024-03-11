"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="px-2 relative md:bg-fixed h-[700px] xl:h-[1120px] bg-hero bg-no-repeat bg-cover bg-center"
    >
      <div className="pt-[4.5rem] flex items-center justify-center h-full md:justify-end md:w-full max-w-[64rem] mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-medium md:text-2xl md:w-[400px] text-center text-gray-100
          "
        >
          Мастерская{" "}
          <span className="font-bold">по шитью и ремонту одежды</span>:
          качественный пошив, профессиональный ремонт.{" "}
          <span className="font-bold">Восстановление и ремонт обуви</span>,
          растяжка для вашего комфорта.{" "}
          <span className="font-bold">Изготовление ключей и заточка ножей</span>
          . Воплощаем ваш стиль, обеспечиваем долговечность ваших вещей.
        </motion.h1>
      </div>
    </motion.section>
  );
}
