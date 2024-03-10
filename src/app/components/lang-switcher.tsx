"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { i18n, type Locale } from "@/lib/utils/i18n-config";
import clsx from "clsx";
import { Poppins } from "next/font/google";

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
  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <ul className={`${poppins.className} flex`}>
      {i18n.locales.map((locale, index) => {
        const isLast = index === i18n.locales.length - 1;
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
              {locale}
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
