"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./clothing-repair-hero.module.css";
import { useTranslations } from "next-intl";

type ClothingRepairHeroProps = {
  children: string;
};

export default function ClothingRepairHero({
  children,
}: ClothingRepairHeroProps) {
  const t = useTranslations("pages.clothing-repair.hero");

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`${styles.bg_hero} px-2 relative md:bg-fixed h-[700px] bg-hero bg-no-repeat bg-cover bg-center`}
    >
      <div className="flex items-center justify-center h-full">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center md:text-2xl md:w-[500px] text-gray-100 outline-none"
        >
          {t(children)}
        </motion.h1>
      </div>
    </motion.section>
  );
}
