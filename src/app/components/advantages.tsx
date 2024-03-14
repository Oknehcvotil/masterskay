import React from "react";
import SectionHeading from "./section-heading";
import { advantagesData } from "@/lib/data/data";
import AdvantagesItem from "./advantages-item";

export default function Advantages() {
  return (
    <section className="pt-14 pb-28 px-2">
      <div className="max-w-[64rem] mx-auto">
        <SectionHeading>Our Advantages</SectionHeading>
        <ul className="flex flex-col justify-center items-center mx-auto max-w-[64rem] gap-8 sm:items-baseline sm:flex-row sm:flex-wrap sm:gap-x-[7rem] md:justify-between md:gap-x-0">
          {advantagesData.map((advantage, index) => (
            <AdvantagesItem
              key={index}
              icon={advantage.icon}
              text={advantage.text}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
