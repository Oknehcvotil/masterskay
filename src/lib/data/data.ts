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
  { label: "Home", href: "" },
  { label: "Services", href: "/services" },
  { label: "Contacts", href: "/contacts" },
] as const;

export const services = [
  {
    label: "Clothing repair",
    href: "/services/clothing-repair",
    imageUrl: clothingRepairImg,
    icon: React.createElement(GiSewingNeedle),
  },
  {
    label: "Clothing tailoring",
    href: "/services/clothing-tailoring",
    imageUrl: clothingTailoringImg,
    icon: React.createElement(GiSewingMachine),
  },
  {
    label: "Shoe repair",
    href: "/services/shoe-repair",
    imageUrl: shoeRepairImg,
    icon: React.createElement(GiRunningShoe),
  },
  {
    label: "Key making",
    href: "/services/key-making",
    imageUrl: keyMakingImg,
    icon: React.createElement(GiHouseKeys),
  },
  {
    label: "Knife sharpening",
    href: "/services/knife-sharpening",
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

export const clothingRepairData = {
  mainTitle:
    "Профессиональный ремонт одежды для сохранения вашего стиля и комфорта. Мы предлагаем широкий спектр услуг: от замены застежек до перешива кроя. Доверьте нам заботу о вашей одежде, и мы вернем ей первозданный вид и функциональность.",
  aboutTitle: "Ремонт одежды",
  aboutText:
    "Наша мастерская по ремонту одежды предлагает высококачественные услуги по восстановлению и модификации вашей одежды. Независимо от того, требуется ли вам починка застежки, замена потертых участков или перешив кроя, наши опытные мастера справятся с задачей профессионально и эффективно. Мы ценим ваш стиль и индивидуальные предпочтения, стремясь обеспечить долговечность и удобство вашей одежде. Доверьте свои любимые вещи нам, и мы сделаем все возможное, чтобы они вновь стали вашими незаменимыми гардеробными аксессуарами. Наши основные услуги:",
  icon: React.createElement(GiSewingNeedle),
  list: [
    "Всевозможный ремонт верхней и нижней одежды",
    "Укорачивание всех видов одежды",
    "Ушивка всех видов одежды",
    "Замена змеек",
    "Перешивка и ремонт верхнего и нижнего белья (купальников)",
    "Ремонт перешивка меховых изделий",
    "Ремонт перешивка кожаных изделий",
    "Ремонт сумок и чемоданов",
  ] as string[],
} as const;

export const clothingTailoringData = {
  mainTitle:
    "Наша мастерская предлагает индивидуальный пошив одежды, который сочетает стиль и комфорт. Мы воплотим ваши идеи в уникальные образы, каждая деталь которых отразит вашу индивидуальность.",
  aboutTitle: "Пошив одежды",
  aboutText:
    "Создание уникальных образов, отражающих вашу индивидуальность! Наша мастерская специализируется на индивидуальном пошиве одежды, где каждая деталь сделана с любовью и вниманием. Независимо от вашего стиля или предпочтений, наши профессиональные мастера превратят ваши идеи в реальность. Мы гарантируем высокое качество и комфорт в каждом изделии. Доверьте нам свои мечты о идеальной одежде, и мы превзойдем ваши ожидания.",
  icon: React.createElement(GiSewingMachine),
} as const;

export const shoeRepairData = {
  mainTitle:
    "Профессиональный ремонт обуви для вашего комфорта! Наша мастерская обеспечит высококачественное восстановление обуви любого вида.",
  aboutTitle: "Ремонт обуви",
  aboutText:
    "Мы специализируемся на профессиональном ремонте и растяжке обуви, где каждая деталь важна для нас.  Независимо от типа обуви или проблемы, наши опытные мастера обеспечат высокое качество и долговечность каждой пары. Наши основные услуги:",
  icon: React.createElement(GiRunningShoe),
  list: [
    "Всевозможный ремонт обуви",
    "Ремонт и замена подошвы",
    "Изминение формы носка",
    "Чистка и покраска",
    "Обновление цвета",
    "Растяжка стопы, голенища обуви",
  ] as string[],
} as const;
