import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import type { Locale } from "@/lib/utils/i18n-config";

type LogoProps = {
  lang: Locale;
};

export default function Logo({ lang }: LogoProps) {
  return (
    <Link href={`/${lang}`} className="outline-none">
      <Image
        src={logo}
        alt="Masterskaya na fontane"
        quality="100"
        priority={true}
      />
    </Link>
  );
}
