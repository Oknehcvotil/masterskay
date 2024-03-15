"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import AddressItems from "./address-items";
import { addressData } from "@/lib/data/data";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: (number: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1 * number,
      duration: 0.5,
    },
  }),
};

export default function ContactsSection() {
  return (
    <section className="px-2 pb-28 ">
      <div className="pt-28 max-w-[64rem] mx-auto">
        <SectionHeading as="h1">Contacts</SectionHeading>
        <div className="md:w-1/2">
          <address>
            <motion.ul className="mb-3 sm:mb-8 flex flex-col items-start">
              {addressData.map((item, index) => (
                <motion.li
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  animate="animate"
                  custom={index}
                  key={index}
                  className="group mb-3 sm:mb-8 last:mb-0  focus:text-orange-500 hover:text-orange-500 transition"
                >
                  <AddressItems
                    href={item.href}
                    icon={item.icon}
                    text={item.text}
                  />
                </motion.li>
              ))}
            </motion.ul>
            <ul></ul>
          </address>
        </div>
      </div>
    </section>
  );
}
