"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { services } from "@/lib/data/data";
import ServicesSectionItem from "./services-section-item";

export default function ServicesSection() {
  return (
    <section className="pt-14 pb-14 px-2 bg-gray-300 bg-opacity-20">
      <div className="max-w-[64rem] mx-auto">
        <SectionHeading>Наши услуги</SectionHeading>
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
