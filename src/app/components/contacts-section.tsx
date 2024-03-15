"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { FaRegClock } from "react-icons/fa6";
import AddressItems from "./address-items";
import { addressData } from "@/lib/data/data";

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemAnimation = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

export default function ContactsSection() {
  return (
    <section className="px-2 pb-28 ">
      <div className="pt-28 max-w-[64rem] mx-auto">
        <SectionHeading as="h1">Contacts</SectionHeading>
        <div className="w-full">
          <motion.ul
            className="mb-3 sm:mb-8 flex flex-col items-start"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {addressData.map((item, index) => (
              <motion.li
                variants={itemAnimation}
                key={index}
                className="mb-3 sm:mb-8"
              >
                <div className="focus:text-orange-500 hover:text-orange-500 transition flex justify-center items-center gap-1">
                  <AddressItems
                    href={item.href}
                    icon={item.icon}
                    text={item.text}
                  />
                </div>
              </motion.li>
            ))}
            <motion.li variants={itemAnimation} className="mb-3 sm:mb-8">
              <div className="flex justify-center items-center gap-1">
                <FaRegClock />
                пн-сб: с 08-00 до 19-00
              </div>
            </motion.li>
            <motion.li variants={itemAnimation}>
              <div className="flex justify-center items-center gap-1">
                <FaRegClock />
                вс: с 11-00 до 17-00
              </div>
            </motion.li>
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
