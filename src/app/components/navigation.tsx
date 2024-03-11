"use client";

import React from "react";
import { Poppins } from "next/font/google";
import type { Locale } from "@/lib/utils/i18n-config";
import ServicesNav from "./services-nav";
import { navigation } from "@/lib/data/data";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useMenu } from "@/lib/context/menu-context";
import NavLink from "./nav-link";

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
  const { closeMenu, closeServicesMenu } = useMenu();

  const handleClick = () => {
    closeMenu();
    closeServicesMenu();
  };

  return (
    <nav className="mb-5 md:mb-0">
      <motion.ul
        className={`${poppins.className} flex flex-col mb-auto pt-6 gap-5 md:flex-row md:pt-0`}
        variants={listVariants}
        initial={"closed"}
        animate={isOpen ? "open" : "closed"}
      >
        {navigation.map((item, index) => (
          <motion.li key={index} variants={itemVariants}>
            {item.href === "/services" ? (
              <ServicesNav lang={lang} />
            ) : (
              <NavLink
                lang={lang}
                href={item.href}
                onClick={handleClick}
                label={item.label}
                pathName={pathName}
              />
            )}
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
}
