"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import { Poppins } from "next/font/google";
import { locales } from "@/config";


const poppins = Poppins({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
  },
  animate: (index: number) => ({
    opacity: 1,
    transition: {
      delay: 0.2 * index,
    },
  }),
};

export default function LangSwitcher() {
  const pathName = usePathname();
  const redirectedPathName = (locale: "ua" | "ru") => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <ul className={`${poppins.className} flex`}>
      {locales.map((locale, index) => {
        const isLast = index === locales.length - 1;
        return (
          <motion.li
            variants={fadeInAnimationVariants}
            initial="initial"
            animate="animate"
            custom={index}
            key={locale}
            className="flex text-gray-800 relative items-center"
          >
            <Link
              href={redirectedPathName(locale)}
              className={clsx(
                "hover:text-orange-500 focus:text-orange-500 transition outline-none",
                {
                  "underline text-orange-500":
                    pathName === redirectedPathName(locale),
                }
              )}
            >
              {locale === "ua" ? "укр" : "рус"}
            </Link>

            {!isLast && (
              <span className="block w-[1px] mx-1 bg-gray-800 h-1/2"></span>
            )}
          </motion.li>
        );
      })}
    </ul>
  );
}
