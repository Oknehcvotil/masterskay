"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Logo from "./logo";
import { Squash as Hamburger } from "hamburger-react";
import LangSwitcher from "./lang-switcher";
import Navigation from "./navigation";
import useResize from "@/lib/hooks/useResize";
import type { Locale } from "@/lib/utils/i18n-config";

const navMobItemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 100, transition: { duration: 0.2 } },
};

const navTabItemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: -100, transition: { duration: 0.2 } },
};

const burgerVariants = {
  open: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  closed: { y: -100, opacity: 0, transition: { duration: 0.5 } },
};

const langVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24, delay: 0.6 },
  },
  closed: { opacity: 0, y: 100, transition: { duration: 0.2, delay: 0.3 } },
};

type HeaderProps = {
  lang: Locale;
};

export default function Header({ lang }: HeaderProps) {
  const windowSize = useResize();
  const isTab = windowSize.width >= 768;

  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isTab) {
      setMenuOpen(false);
    }
  }, [isTab]);

  return (
    <header className="relative">
      <motion.div
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        className="fixed z-50 top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full border-gray-100 border-opacity-40 bg-gray-100 bg-opacity-60 shadow-black/[0.03] backdrop-blur-[0.5rem] p-2"
      >
        <div className="flex items-center max-w-[64rem] justify-center md:justify-between mx-auto">
          <div className="mr-auto md:hidden">
            <Hamburger color="#FFA07A" onToggle={handleToggleMenu} />
          </div>
          <div className="flex-grow flex justify-center md:flex-grow-0 ">
            <Logo lang={lang} />
          </div>

          {isTab && (
            <Navigation lang={lang} itemVariants={navTabItemVariants} />
          )}

          {isTab && <LangSwitcher />}
        </div>
      </motion.div>
      <motion.div
        initial={false}
        animate={isMenuOpen ? "open" : "closed"}
        variants={burgerVariants}
        className="pb-7 bg-gray-100 bg-opacity-60 backdrop-blur-[0.5rem] pt-[4.5rem] flex justify-between items-center flex-col w-full h-screen overflow-y-auto absolute top-0 left-0 z-49"
      >
        <Navigation
          lang={lang}
          isMenuOpen={isMenuOpen}
          itemVariants={navMobItemVariants}
        />

        <motion.div
          initial={false}
          animate={isMenuOpen ? "open" : "closed"}
          variants={langVariants}
        >
          <LangSwitcher />
        </motion.div>
      </motion.div>
    </header>
  );
}
