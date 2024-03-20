"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { services } from "@/lib/data/data";
import ServicesSectionItem from "./services-section-item";
import { useTranslations } from "next-intl";

export default function ServicesSection() {
  const t = useTranslations("pages.home.services_section");

  return (
    <section className="pt-14 pb-14 px-2">
      <div className="max-w-[64rem] mx-auto">
        <SectionHeading>home.services_section.title</SectionHeading>
        <ul className="flex w-full flex-wrap items-center justify-center gap-8 md:gap-5 mx-auto">
          {services.map((item, index) => (
            <ServicesSectionItem
              key={index}
              label={item.label}
              href={item.href}
              imageUrl={item.imageUrl.src}
              number={index}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
