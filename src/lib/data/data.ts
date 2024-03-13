import React from "react";
import {
  GiSewingNeedle,
  GiSewingMachine,
  GiRunningShoe,
  GiHouseKeys,
} from "react-icons/gi";
import { PiKnifeDuotone } from "react-icons/pi";
import clothingRepairImg from "../../../public/images/clothing-repair-bg.jpg";
import clothingTailoringImg from "../../../public/images/clothing-tailoring-bg.jpg";
import shoeRepairImg from "../../../public/images/shoe-repair-bg.jpg";
import keyMakingImg from "../../../public/images/key-making-bg.jpg";
import knifeSharpeningImg from "../../../public/images/knife-sharpening-bg.jpg";

export const navigation = [
  { label: "Home", href: "" },
  { label: "Services", href: "/services" },
  { label: "Contacts", href: "/contacts" },
] as const;

export const services = [
  {
    label: "Clothing repair",
    href: "/clothing-repair",
    imageUrl: clothingRepairImg,
    icon: React.createElement(GiSewingNeedle),
  },
  {
    label: "Clothing tailoring",
    href: "/clothing-tailoring",
    imageUrl: clothingTailoringImg,
    icon: React.createElement(GiSewingMachine),
  },
  {
    label: "Shoe repair",
    href: "/shoe-repair",
    imageUrl: shoeRepairImg,
    icon: React.createElement(GiRunningShoe),
  },
  {
    label: "Key making",
    href: "/key-making",
    imageUrl: keyMakingImg,
    icon: React.createElement(GiHouseKeys),
  },
  {
    label: "Knife sharpening",
    href: "/knife-sharpening",
    imageUrl: knifeSharpeningImg,
    icon: React.createElement(PiKnifeDuotone),
  },
] as const;
