import React from "react";

type AddressItemsProps = {
  href: string;
  icon: React.ReactNode;
  text: string;
};

export default function AddressItems({ href, icon, text }: AddressItemsProps) {
  return (
    <a href={href} className="flex justify-center items-center gap-1">
      {icon}
      {text}
    </a>
  );
}
