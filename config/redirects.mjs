/** Merged pages redirect to their equivalent section, never to a blanket fallback. */
const oldServices = [
  "clothing-repair",
  "clothing-tailoring",
  "shoe-repair",
  "key-making",
  "knife-sharpening",
];
const redirects = [
  { source: "/favicon.ico", destination: "/icon.svg", permanent: true },
  { source: "/", destination: "/ua", permanent: true },
  ...["ru", "en"].map((locale) => ({
    source: `/${locale}`,
    destination: "/ua",
    permanent: true,
  })),
  ...["", "/ua", "/ru", "/en"].flatMap((prefix) => [
    {
      source: `${prefix}/contacts`,
      destination: "/ua#contact",
      permanent: true,
    },
    {
      source: `${prefix}/services`,
      destination: "/ua#services",
      permanent: true,
    },
    ...oldServices.map((slug) => ({
      source: `${prefix}/services/${slug}`,
      destination: `/ua#${slug}`,
      permanent: true,
    })),
  ]),
];
export default redirects;
