import React from "react";
import Link from "next/link";
import clsx from "clsx";

type NavLinkProps = {
  lang: string;
  href: string;
  onClick: () => void;
  icon?: React.ReactNode;
  label: string;
  pathName: string;
};

export default function NavLink({ lang, href, onClick, icon, label, pathName }: NavLinkProps) {
  return (
    <Link
      href={`/${lang}${href}`}
      onClick={onClick}
      className={clsx(
        "hover:text-orange-500 focus:text-orange-500 transition outline-none flex items-center gap-1",
        {
          "underline text-orange-500": pathName === `/${lang}${href}`,
        }
      )}
    >
      {icon && icon}
      {label}
    </Link>
  );
}
