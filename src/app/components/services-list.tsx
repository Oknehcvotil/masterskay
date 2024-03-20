"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 * index,
    },
  }),
};

type ServicesList = {
  children: string;
  list?: string[];
  icon: React.ReactNode;
  title: string;
};

export default function ServicesList({
  children,
  list,
  icon,
  title,
}: ServicesList) {
  const t = useTranslations("pages");

  return (
    <section className="pt-14 pb-14 px-2">
      <div className="flex flex-col items-center max-w-[52rem] mx-auto">
        <SectionHeading>{title}</SectionHeading>
        <motion.p
          className="mb-3"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
          }}
          transition={{ duration: 0.5 }}
        >
          {t(children)}
        </motion.p>
        {list && (
          <ul>
            {list.map((item, index) => (
              <motion.li
                key={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                className="group mb-3 last:mb-0 flex items-center gap-3"
                viewport={{
                  once: true,
                }}
                custom={index}
              >
                {icon}
                {t(item)}
              </motion.li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
