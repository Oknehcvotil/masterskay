import type { Metadata } from "next";
import { homeUrl, site } from "@/content/site";
import { services } from "@/content/services";

export const siteMetadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.seo.title, template: `%s | ${site.name}` },
  description: site.seo.description,
  alternates: { canonical: homeUrl },
  applicationName: site.name,
  openGraph: {
    type: "website",
    locale: "uk_UA",
    siteName: site.name,
    title: site.seo.title,
    description: site.seo.description,
    url: homeUrl,
    images: [{ url: site.seo.image, width: 1000, height: 667, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.seo.description,
    images: [site.seo.image],
  },
  robots: { index: true, follow: true },
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION || undefined },
};

export function getBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${homeUrl}#business`,
    name: site.name,
    url: homeUrl,
    description: site.seo.description,
    image: `${site.url}${site.seo.image}`,
    telephone: site.phones[0].value,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressCountry: site.address.country,
    },
    areaServed: { "@type": "City", name: site.address.city },
    openingHoursSpecification: site.hours.map((hours) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [...hours.days],
      opens: hours.opens,
      closes: hours.closes,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Послуги майстерні",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
          url: `${homeUrl}#${service.id}`,
        },
      })),
    },
  };
}

export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
