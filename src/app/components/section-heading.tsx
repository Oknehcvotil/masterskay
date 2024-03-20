"use client";

import React from "react";
import { useTranslations } from "next-intl";

type SectionHeadingProps = {
  children: string;
  as?: keyof JSX.IntrinsicElements;
};

export default function SectionHeading({
  children,
  as: Component = "h2",
}: SectionHeadingProps) {
  const t = useTranslations("pages");

  return (
    <Component className="text-2xl font-medium capitalize mb-8 text-center">
      {t(children)}
    </Component>
  );
}
