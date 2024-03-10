import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { motion, Variants } from "framer-motion";
import type { Locale } from "@/lib/utils/i18n-config";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  GiSewingNeedle,
  GiSewingMachine,
  GiRunningShoe,
  GiHouseKeys,
} from "react-icons/gi";
import { PiKnifeDuotone } from "react-icons/pi";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

type ServiceNavItem = {
  label: string;
  href: string;
  icon: React.ReactElement;
};

const services: ServiceNavItem[] = [
  {
    label: "Clothing repair",
    href: "clothing-repair",
    icon: <GiSewingNeedle />,
  },
  {
    label: "Clothing tailoring",
    href: "clothing-tailoring",
    icon: <GiSewingMachine />,
  },
  { label: "Shoe repair", href: "shoe-repair", icon: <GiRunningShoe /> },
  { label: "Key making", href: "key-making", icon: <GiHouseKeys /> },
  {
    label: "Knife sharpening",
    href: "knife-sharpening",
    icon: <PiKnifeDuotone />,
  },
];

export default function ServicesNav({ lang }: { lang: Locale }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className={clsx("relative", { "mb-[190px] md:mb-0": isOpen })}
    >
      <motion.button
        className={clsx(
          "outline-none flex items-center justify-center gap-1 focus:text-orange-500 hover:text-orange-500 transition",
          {
            "underline text-orange-500": services.some(
              (service) => pathName === `/${lang}/${service.href}`
            ),
          }
        )}
        onClick={() => setIsOpen(!isOpen)}
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
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        {services.map((service, index) => (
          <motion.li
            key={index}
            variants={itemVariants}
            className={index === services.length - 1 ? "" : "mb-3"}
          >
            <Link
              href={`/${lang}/${service.href}`}
              className={clsx(
                "hover:text-orange-500 focus:text-orange-500 transition outline-none flex items-center gap-1",
                {
                  "underline text-orange-500":
                    pathName === `/${lang}/${service.href}`,
                }
              )}
            >
              {service.icon}
              {service.label}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
