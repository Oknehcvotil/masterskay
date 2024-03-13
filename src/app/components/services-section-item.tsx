"use client";

import React from "react";
import Link from "next/link";
import { useLang } from "@/lib/hooks/use-lang";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (number: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * number,
      duration: 0.5,
    },
  }),
};

type ServicesSectionItemProps = {
  label: string;
  href: string;
  imageUrl: string;
  number: number;
};

export default function ServicesSectionItem({
  label,
  href,
  imageUrl,
  number,
}: ServicesSectionItemProps) {
  const { lang } = useLang();

  return (
    <motion.li
      className="overflow-hidden relative last:mb-0 group max-w-[28rem] w-full h-[20rem] border border-black/50 rounded-lg md:h-[12rem] md:max-w-[17rem]"
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={number}
    >
      <div className="services-cards h-full w-full relative">
        <Image
          src={imageUrl}
          alt="Our services"
          quality={95}
          fill={true}
          className="relative "
        />
      </div>

      <motion.div
        className="absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.5,
          delay: 0.5,
        }}
      >
        <h3 className="mb-4 font-semibold text-xl text-gray-100 text-center">
          {label}
        </h3>
        <Link
          href={`/${lang}${href}`}
          className="text-lg group text-white border border-orange-500 flex gap-2 justify-center items-center px-3 py-1 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition"
        >
          подробнее
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
      </motion.div>
    </motion.li>
  );
}
