import React from "react";
import {
  GiSewingNeedle,
  GiSewingMachine,
  GiRunningShoe,
  GiHouseKeys,
} from "react-icons/gi";
import clothingRepairImg from "../../../public/images/clothing-repair-bg.jpg";
import clothingTailoringImg from "../../../public/images/clothing-tailoring-bg.jpg";
import shoeRepairImg from "../../../public/images/shoe-repair-bg.jpg";
import keyMakingImg from "../../../public/images/key-making-bg.jpg";
import knifeSharpeningImg from "../../../public/images/knife-sharpening-bg.jpg";
import { GiSandsOfTime } from "react-icons/gi";
import { PiKnifeDuotone, PiHandCoins } from "react-icons/pi";
import { LiaUserCheckSolid } from "react-icons/lia";
import { FaRegStar, FaViber, FaRegClock } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { RiTelegramLine } from "react-icons/ri";

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

export const advantagesData = [
  {
    icon: React.createElement(FaRegStar, { size: 100 }),
    text: "Безупречное качество на все виды услуг",
  },
  {
    icon: React.createElement(PiHandCoins, { size: 100 }),
    text: "Приятные цены на услуги",
  },
  {
    icon: React.createElement(GiSandsOfTime, { size: 100 }),
    text: "Соблюдение сроков",
  },
  {
    icon: React.createElement(LiaUserCheckSolid, { size: 100 }),
    text: "Профессиональные мастера",
  },
] as const;

export const mapUrls = {
  ua: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2750.067978606894!2d30.74903577551432!3d46.427532168651915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c6334e9b95143f%3A0xb227a3cf00ec04a2!2z0KTQntCfLtCb0LjRgtC-0LLRh9C10L3QutC-!5e0!3m2!1suk!2sua!4v1710432145137!5m2!1suk!2sua",
  en: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2750.0681636944687!2d30.751610699999997!3d46.4275285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c6334e9b95143f%3A0xb227a3cf00ec04a2!2z0KTQntCfLtCb0LjRgtC-0LLRh9C10L3QutC-!5e0!3m2!1sen!2sua!4v1710433024130!5m2!1sen!2sua",
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
    time: "пн-сб: с 08-00 до 19-00",
    icon: React.createElement(FaRegClock, { size: 24 }),
  },
  {
    time: "вс: с 11-00 до 17-00",
    icon: React.createElement(FaRegClock, { size: 24 }),
  },
] as const;
