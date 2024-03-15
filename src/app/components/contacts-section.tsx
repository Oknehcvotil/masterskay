"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import AddressItems from "./address-items";
import { addressData } from "@/lib/data/data";
import { FaRegClock } from "react-icons/fa6";

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.3,
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
        <div className="md:w-1/2">
          <address>
            <motion.ul
              variants={container}
              initial="hidden"
              animate="visible"
              className="mb-3 sm:mb-8 flex flex-col items-start"
            >
              {addressData.map((item, index) => (
                <motion.li
                  variants={itemAnimation}
                  key={index}
                  className="group mb-3 sm:mb-8  focus:text-orange-500 hover:text-orange-500 transition"
                >
                  <AddressItems
                    href={item.href}
                    icon={item.icon}
                    text={item.text}
                  />
                </motion.li>
              ))}
              <motion.li
                variants={itemAnimation}
                className="group mb-3 sm:mb-8 focus:text-orange-500 hover:text-orange-500 transition flex justify-center items-center gap-1"
              >
                <FaRegClock />
                пн-сб: с 08-00 до 19-00
              </motion.li>
              <motion.li
                variants={itemAnimation}
                className="group focus:text-orange-500 hover:text-orange-500 transition flex justify-center items-center gap-1"
              >
                <FaRegClock />
                вс: с 11-00 до 17-00
              </motion.li>
            </motion.ul>
            <ul></ul>
          </address>
        </div>
      </div>
    </section>
  );
}
