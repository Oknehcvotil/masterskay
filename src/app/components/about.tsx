"use client";

import React from "react";
import SectionHeading from "./section-heading";
import Image from "next/image";
import { motion } from "framer-motion";
import oldPhoto from "../../../public/images/old-photo.jpg";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function About() {
  const aboutText = [
    "Наша мастерская — это не просто дело, это семейное творчество, которому мы посвятили более 30 лет. У нас собрана команда талантливых мастеров, готовых решать задачи любой сложности.",
    "Мы создаем не просто одежду, а воплощаем ваш стиль, подчеркиваем индивидуальность. Ремонт одежды у нас — это неотъемлемая часть процесса, в которой мы возвращаем жизнь вашим любимым вещам. Обувь, поддерживаемая нашим искусством ремонта, обретает новую жизнь, принося вам комфорт и дальше.",
  ];

  return (
    <>
      <section className="pt-28 px-2 bg-gray/[0.4] pb-20">
        <div className="max-w-[64rem] items-center mx-auto flex flex-col md:flex-row md:justify-between">
          <div className="max-w-[32rem] mb-10 md:mb-0 md:mr-10">
            <SectionHeading>About us</SectionHeading>
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
                className="mb-4"
              >
                {text}
              </motion.p>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{
              once: true,
            }}
            className="max-w-xs md:max-w-sm rounded overflow-hidden shadow-lg rotate-12 md:mr-10"
          >
            <Image src={oldPhoto} alt="workshop in 1979" quality={95} />
          </motion.div>
        </div>
      </section>
    </>
  );
}
