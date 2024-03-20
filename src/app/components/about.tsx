"use client";

import React from "react";
import SectionHeading from "./section-heading";
import Image from "next/image";
import { motion } from "framer-motion";
import oldPhoto from "../../../public/images/old-photo.jpg";
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
      delay: 0.5 * index,
      duration: 0.5,
    },
  }),
};

export default function About() {
  const t = useTranslations("pages.home.about_us");
  const aboutText = ["first_paragraph", "second_paragraph"];

  return (
    <>
      <section className="pt-28 pb-14 px-2">
        <div className="max-w-[64rem] items-center mx-auto flex flex-col md:flex-row md:justify-between">
          <div className="max-w-[32rem] mb-10 md:mb-0 md:mr-10">
            <SectionHeading>home.about_us.title</SectionHeading>
            {aboutText.map((text, index) => (
              <motion.p
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={index}
                key={index}
                className="group mb-4 last:mb-0"
              >
                {t(text)}
              </motion.p>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{
              once: true,
            }}
            className="max-w-xs md:max-w-sm rounded overflow-hidden shadow-lg rotate-12 md:mr-5"
          >
            <Image src={oldPhoto} alt="workshop in 1979" quality={95} />
          </motion.div>
        </div>
      </section>
    </>
  );
}
