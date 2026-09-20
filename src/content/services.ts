export type Service = {
  id: string;
  legacySlug: string;
  title: string;
  shortTitle: string;
  description: string;
  details?: string[];
  image?: string;
  imageAlt?: string;
  icon: "scissors" | "shoe" | "key" | "knife";
};

/** Keep id and legacySlug stable: old links and redirects use them. */
export const services: Service[] = [
  {
    id: "clothing-repair",
    legacySlug: "clothing-repair",
    title: "Ремонт одягу",
    shortTitle: "Ремонт одягу",
    description: "Щоб знову сиділо як треба.",
    details: [
      "Укорочення та підгонка по фігурі",
      "Заміна блискавок і ремонт швів",
      "Робота зі шкірою, хутром, сумками",
    ],
    image: "/images/clothing-repair-bg.jpg",
    imageAlt: "Тканина, нитки та інструменти для ремонту одягу",
    icon: "scissors",
  },
  {
    id: "shoe-repair",
    legacySlug: "shoe-repair",
    title: "Ремонт взуття",
    shortTitle: "Ремонт взуття",
    description: "Ще багато кроків разом.",
    details: [
      "Ремонт і заміна підошви",
      "Чищення, фарбування, оновлення кольору",
      "Розтягування взуття",
    ],
    image: "/images/shoe-repair-bg.jpg",
    imageAlt: "Майстер вручну ремонтує шкіряне взуття",
    icon: "shoe",
  },
  {
    id: "clothing-tailoring",
    legacySlug: "clothing-tailoring",
    title: "Пошиття одягу",
    shortTitle: "Пошиття",
    description: "Індивідуальний крій та речі, створені саме для вас.",
    icon: "scissors",
  },
  {
    id: "key-making",
    legacySlug: "key-making",
    title: "Виготовлення ключів",
    shortTitle: "Ключі",
    description: "Дублікати й магнітні ключі, заміна батарейок у брелоках.",
    icon: "key",
  },
  {
    id: "knife-sharpening",
    legacySlug: "knife-sharpening",
    title: "Заточування",
    shortTitle: "Заточування",
    description: "Ножі, ножиці та ножі для м’ясорубок. Повертаємо гостроту.",
    icon: "knife",
  },
];
