import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import type { Locale } from "@/i18n";

type LogoProps = {
  lang: Locale;
  closeMenu: () => void;
  closeServicesMenu: () => void;
};

export default function Logo({
  lang,
  closeMenu,
  closeServicesMenu,
}: LogoProps) {
  const handleClick = () => {
    closeMenu();
    closeServicesMenu();
  };

  return (
    <Link href={`/${lang}`} className="outline-none" onClick={handleClick}>
      <Image
        src={logo}
        alt="Masterskaya na fontane"
        quality="100"
        priority={true}
      />
    </Link>
  );
}
