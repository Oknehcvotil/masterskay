"use client";

import React from "react";
import { motion } from "framer-motion";
import { advantagesData } from "@/lib/data/data";

type AdvantagesItemProps = (typeof advantagesData)[number];

export default function AdvantagesItem({ icon, text }: AdvantagesItemProps) {
  return (
    <li className="flex flex-col items-center justify-center text-center max-w-[12rem] font-semibold">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{
          once: true,
        }}
        transition={{ duration: 0.5 }}
        className="mb-3 text-orange-500"
      >
        {icon}
      </motion.div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{
          once: true,
        }}
        transition={{ duration: 0.5 }}
        
      >
        {text}
      </motion.div>
    </li>
  );
}
