/** Contacts, hours and branding. Edit here: the page and Google markup share this data. */
export const site = {
  name: "Майстерня на Фонтані",
  shortName: "Майстерня",
  brandSuffix: "НА ФОНТАНІ",
  url: "https://masterskaya-na-fontane.od.ua",
  homePath: "/ua",
  language: "uk",
  experienceYears: "30+",
  address: { street: "Фонтанська дорога, 63в", city: "Одеса", country: "UA" },
  phones: [
    { label: "097 571 97 71", value: "+380975719771" },
    { label: "099 280 07 09", value: "+380992800709" },
  ],
  hours: [
    {
      label: "Понеділок — субота",
      days: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "19:00",
    },
    { label: "Неділя", days: ["Sunday"], opens: "12:00", closes: "17:00" },
  ],
  // Existing Google Maps place, preserved from the original website.
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2750.067978606894!2d30.74903577551432!3d46.427532168651915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c6334e9b95143f%3A0xb227a3cf00ec04a2!2z0KTQntCfLtCb0LjRgtC-0LLRh9C10L3QutC-!5e0!3m2!1suk!2sua!4v1710432145137!5m2!1suk!2sua",
  seo: {
    title: "Ремонт одягу та взуття в Одесі | Майстерня на Фонтані",
    description:
      "Ремонт одягу та взуття, індивідуальне пошиття, виготовлення ключів і заточування в Одесі. Сімейна майстерня на Фонтанській дорозі, 63в. Телефонуйте!",
    image: "/images/clothing-tailoring-bg.jpg",
  },
} as const;

export const addressLine = `${site.address.city}, ${site.address.street}`;
export const homeUrl = `${site.url}${site.homePath}`;
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(addressLine)}`;
