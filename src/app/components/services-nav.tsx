import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { motion, Variants } from "framer-motion";
import type { Locale } from "@/lib/utils/i18n-config";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useMenuContext } from "@/lib/hooks/use-menu-context";
import NavLink from "./nav-link";
import { services } from "@/lib/data/data";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export default function ServicesNav({ lang }: { lang: Locale }) {
  const {
    closeMenu,
    isServicesMenuOpen,
    toggleServicesMenu,
    closeServicesMenu,
  } = useMenuContext();
  const pathName = usePathname();

  const handleClick = () => {
    closeMenu();
    closeServicesMenu();
  };

  return (
    <motion.div
      initial={false}
      animate={isServicesMenuOpen ? "open" : "closed"}
      className={clsx("relative", { "mb-[190px] md:mb-0": isServicesMenuOpen })}
    >
      <motion.button
        className={clsx(
          "outline-none flex items-center justify-center gap-1 focus:text-orange-500 hover:text-orange-500 transition",
          {
            "underline text-orange-500": services.some(
              (service) => pathName === `/${lang}${service.href}`
            ),
          }
        )}
        onClick={() => toggleServicesMenu()}
      >
        Services
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
          <IoMdArrowDropdown />
        </motion.div>
      </motion.button>
      {isServicesMenuOpen && (
        <div
          onClick={closeServicesMenu}
          className="md:fixed md:w-screen md:h-screen md:top-[4.5rem] z-10 top-0 left-0"
        ></div>
      )}
      <motion.ul
        className="absolute p-2 top-6 -left-[11%] w-[175px] z-50 md:top-[3.5rem] md:border-gray-100 md:border-opacity-40 md:bg-gray-100 md:bg-opacity-60 md:shadow-black/[0.03] md:backdrop-blur-[0.5rem] md:left-1/2 md:-translate-x-1/2"
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        style={{ pointerEvents: isServicesMenuOpen ? "auto" : "none" }}
      >
        {services.map((service, index) => (
          <motion.li
            key={index}
            variants={itemVariants}
            className={index === services.length - 1 ? "" : "mb-3"}
          >
            <NavLink
              lang={lang}
              href={service.href}
              onClick={handleClick}
              icon={service.icon}
              label={service.label}
              pathName={pathName}
            />
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
