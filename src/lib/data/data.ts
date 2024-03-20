import React from "react";
import {
  GiSewingNeedle,
  GiSewingMachine,
  GiRunningShoe,
  GiHouseKeys,
  GiSandsOfTime,
} from "react-icons/gi";
import clothingRepairImg from "../../../public/images/clothing-repair-bg.jpg";
import clothingTailoringImg from "../../../public/images/clothing-tailoring-bg.jpg";
import shoeRepairImg from "../../../public/images/shoe-repair-bg.jpg";
import keyMakingImg from "../../../public/images/key-making-bg.jpg";
import knifeSharpeningImg from "../../../public/images/knife-sharpening-bg.jpg";
import { PiKnifeDuotone, PiHandCoins } from "react-icons/pi";
import { LiaUserCheckSolid } from "react-icons/lia";
import { FaRegStar, FaViber, FaRegClock } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { RiTelegramLine } from "react-icons/ri";

export const navigation = [
  { label: "nav.home", href: "" },
  { label: "nav.services", href: "/services" },
  { label: "nav.contacts", href: "/contacts" },
] as const;

export const services = [
  {
    label: "services_nav.clothing_repair",
    href: "/services/clothing-repair",
    imageUrl: clothingRepairImg,
    icon: React.createElement(GiSewingNeedle),
  },
  {
    label: "services_nav.clothing_tailoring",
    href: "/services/clothing-tailoring",
    imageUrl: clothingTailoringImg,
    icon: React.createElement(GiSewingMachine),
  },
  {
    label: "services_nav.shoe_repair",
    href: "/services/shoe-repair",
    imageUrl: shoeRepairImg,
    icon: React.createElement(GiRunningShoe),
  },
  {
    label: "services_nav.key_making",
    href: "/services/key-making",
    imageUrl: keyMakingImg,
    icon: React.createElement(GiHouseKeys),
  },
  {
    label: "services_nav.knife_sharpening",
    href: "/services/knife-sharpening",
    imageUrl: knifeSharpeningImg,
    icon: React.createElement(PiKnifeDuotone),
  },
] as const;

export const advantagesData = [
  {
    icon: React.createElement(FaRegStar, { size: 100 }),
    text: "quality",
  },
  {
    icon: React.createElement(PiHandCoins, { size: 100 }),
    text: "prices",
  },
  {
    icon: React.createElement(GiSandsOfTime, { size: 100 }),
    text: "deadlines",
  },
  {
    icon: React.createElement(LiaUserCheckSolid, { size: 100 }),
    text: "professionals",
  },
] as const;

export const mapUrls = {
  ua: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2750.067978606894!2d30.74903577551432!3d46.427532168651915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c6334e9b95143f%3A0xb227a3cf00ec04a2!2z0KTQntCfLtCb0LjRgtC-0LLRh9C10L3QutC-!5e0!3m2!1suk!2sua!4v1710432145137!5m2!1suk!2sua",
  ru: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2750.0681636944687!2d30.751610699999997!3d46.4275285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c6334e9b95143f%3A0xb227a3cf00ec04a2!2z0KTQntCfLtCb0LjRgtC-0LLRh9C10L3QutC-!5e0!3m2!1sru!2sua!4v1710433112442!5m2!1sru!2sua",
} as const;

export const addressData = [
  {
    href: "tel:+380975719771",
    text: "+38 (097) 571-97-71",
    icon: React.createElement(FiPhone, { size: 24 }),
  },
  {
    href: "tel:+380992800709",
    text: "+38 (099) 280-07-09",
    icon: React.createElement(FiPhone, { size: 24 }),
  },
  {
    href: "viber://chat?number=%2B380975719771",
    text: "+38 (097) 571-97-71",
    icon: React.createElement(FaViber, { size: 24 }),
  },
  {
    href: "https://telegram.me/+380975719771",
    text: "+38 (097) 571-97-71",
    icon: React.createElement(RiTelegramLine, { size: 24 }),
  },
] as const;

export const workingHours = [
  {
    time: "schedule.mn-st",
    icon: React.createElement(FaRegClock, { size: 24 }),
  },
  {
    time: "schedule.sn",
    icon: React.createElement(FaRegClock, { size: 24 }),
  },
] as const;

export const clothingRepairData = {
  mainTitle: "title",
  aboutTitle: "clothing-repair.services.title",
  aboutText: "clothing-repair.services.about",
  icon: React.createElement(GiSewingNeedle),
  list: [
    "clothing-repair.services.list.first",
    "clothing-repair.services.list.second",
    "clothing-repair.services.list.third",
    "clothing-repair.services.list.fourth",
    "clothing-repair.services.list.fifth",
    "clothing-repair.services.list.six",
    "clothing-repair.services.list.seven",
    "clothing-repair.services.list.eight",
  ] as string[],
} as const;

export const clothingTailoringData = {
  mainTitle: "title",
  aboutTitle: "clothing-tailoring.services.title",
  aboutText: "clothing-tailoring.services.about",
  icon: React.createElement(GiSewingMachine),
} as const;

export const shoeRepairData = {
  mainTitle: "title",
  aboutTitle: "shoe-repair.services.title",
  aboutText: "shoe-repair.services.about",
  icon: React.createElement(GiRunningShoe),
  list: [
    "shoe-repair.services.list.first",
    "shoe-repair.services.list.second",
    "shoe-repair.services.list.third",
    "shoe-repair.services.list.fourth",
    "shoe-repair.services.list.fifth",
    "shoe-repair.services.list.six",
  ] as string[],
} as const;

export const keyMakingData = {
  mainTitle: "title",
  aboutTitle: "key-making.services.title",
  aboutText: "key-making.services.about",
  icon: React.createElement(GiHouseKeys),
  list: [
    "key-making.services.list.first",
    "key-making.services.list.second",
    "key-making.services.list.third",
  ] as string[],
} as const;

export const knifeSharpeningData = {
  mainTitle: "title",
  aboutTitle: "knife-sharpening.services.title",
  aboutText: "knife-sharpening.services.about",
  icon: React.createElement(PiKnifeDuotone),
  list: [
    "knife-sharpening.services.list.first",
    "knife-sharpening.services.list.second",
    "knife-sharpening.services.list.third",
    "knife-sharpening.services.list.fourth",
  ] as string[],
} as const;
