"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import AddressItems from "./address-items";
import { addressData } from "@/lib/data/data";
import { workingHours } from "@/lib/data/data";
import ContactForm from "./contact-form";

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

const addressItems = addressData.map((item, index) => (
  <motion.li variants={itemAnimation} key={index} className="mb-4 sm:mb-0">
    <div className="focus:text-orange-500 hover:text-orange-500 transition flex justify-center items-center gap-1">
      <AddressItems href={item.href} icon={item.icon} text={item.text} />
    </div>
  </motion.li>
));

const workSchedule = workingHours.map((item, index) => (
  <motion.li
    variants={itemAnimation}
    key={index}
    className="group mb-4 sm:mb-0 last:mb-0"
  >
    <div className="flex justify-center items-center gap-1">
      {item.icon}
      {item.time}
    </div>
  </motion.li>
));

export default function ContactsSection() {
  return (
    <section className="px-2 pb-28 ">
      <div className="pt-28 max-w-[64rem] mx-auto">
        <SectionHeading as="h1">Contacts</SectionHeading>
        <div className="w-full flex flex-col items-center sm:flex-row sm:justify-between">
          <motion.ul
            className="mb-28 sm:mb-0 flex flex-col items-start sm:justify-between sm:min-h-[314px]"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {addressItems}
            {workSchedule}
          </motion.ul>
          <div className="w-full sm:w-1/2">
            <SectionHeading>Бесплатная консультация</SectionHeading>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
              }}
              viewport={{
                once: true,
              }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
