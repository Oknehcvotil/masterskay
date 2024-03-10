"use client";

import Link from "next/link";
import React from "react";
import { Poppins } from "next/font/google";
import type { Locale } from "@/lib/utils/i18n-config";
import ServicesNav from "./services-nav";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const listVariants = {
  open: {
    transition: {
      delay: 0.3,
      staggerChildren: 0.07,
      delayChildren: 0.3,
      staggerDirection: 1,
    },
  },
  closed: {
    transition: {
      delay: 0.3,
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const poppins = Poppins({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

type NavigationProps = {
  lang: Locale;
  isMenuOpen?: boolean;
  itemVariants: {
    open: {
      opacity: number;
      y: number;
      transition: {
        type: string;
        stiffness: number;
        damping: number;
      };
    };
    closed: {
      opacity: number;
      y: number;
      transition: {
        duration: number;
      };
    };
  };
};

export default function Navigation({
  lang,
  itemVariants,
  isMenuOpen,
}: NavigationProps) {
  const isOpen = isMenuOpen !== undefined ? isMenuOpen : true;
  const pathName = usePathname();

  const navigationItems = [
    { label: "Home", path: `/${lang}` },
    { label: "Services", component: <ServicesNav lang={lang} /> },
    { label: "Contacts", path: `/${lang}/contacts` },
  ];

  return (
    <nav>
      <motion.ul
        className={`${poppins.className} flex flex-col mb-auto pt-6 gap-5 md:flex-row md:pt-0`}
        variants={listVariants}
        initial={"closed"}
        animate={isOpen ? "open" : "closed"}
      >
        {navigationItems.map((item, index) => (
          <motion.li key={index} variants={itemVariants}>
            {item.component ? (
              item.component
            ) : (
              <Link
                href={item.path}
                className={clsx(
                  "hover:text-orange-500 focus:text-orange-500 transition outline-none ",
                  {
                    "underline text-orange-500": pathName === item.path,
                  }
                )}
              >
                {item.label}
              </Link>
            )}
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
}
