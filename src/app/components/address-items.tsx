import React from "react";

type AddressItemsProps = {
  href: string;
  icon: React.ReactNode;
  text: string;
};

export default function AddressItems({ href, icon, text }: AddressItemsProps) {
  return (
    <li className="mb-5 focus:scale-110 hover:scale-110 transition">
      <a href={href} className="flex justify-center items-center gap-1">
        {icon}
        {text}
      </a>
    </li>
  );
}
