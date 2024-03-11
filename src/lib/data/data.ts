import React from "react";
import {
  GiSewingNeedle,
  GiSewingMachine,
  GiRunningShoe,
  GiHouseKeys,
} from "react-icons/gi";
import { PiKnifeDuotone } from "react-icons/pi";

export const navigation = [
  { label: "Home", href: "" },
  { label: "Services", href: "/services" },
  { label: "Contacts", href: "/contacts" },
] as const;

export const services = [
  {
    label: "Clothing repair",
    href: "/clothing-repair",
    icon: React.createElement(GiSewingNeedle),
  },
  {
    label: "Clothing tailoring",
    href: "/clothing-tailoring",
    icon: React.createElement(GiSewingMachine),
  },
  {
    label: "Shoe repair",
    href: "/shoe-repair",
    icon: React.createElement(GiRunningShoe),
  },
  {
    label: "Key making",
    href: "/key-making",
    icon: React.createElement(GiHouseKeys),
  },
  {
    label: "Knife sharpening",
    href: "/knife-sharpening",
    icon: React.createElement(PiKnifeDuotone),
  },
] as const;
