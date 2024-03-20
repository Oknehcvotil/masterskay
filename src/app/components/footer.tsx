import React from "react";
import { TfiLocationPin } from "react-icons/tfi";
import { addressData } from "@/lib/data/data";
import AddressItems from "./address-items";
import FooterBtn from "./footer-btn";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="pt-28 px-2 pb-14 bg-gray-700">
      <div className="flex flex-col items-center justify-center text-gray-200 max-w-[64rem] mx-auto">
        <div className="w-full flex flex-col-reverse items-center justify-center mb-10 sm:flex-row sm:justify-between sm:items-start">
          <div className="flex flex-col-reverse sm:flex-col sm:items-start">
            <div className="flex justify-center items-center gap-1 sm:mb-5">
              <TfiLocationPin size={24} />
              <p>{t("location")}</p>
            </div>
            <FooterBtn />
          </div>

          <address>
            <ul className="flex flex-col items-start md:flex-row md:items-center md:gap-x-4 md:flex-wrap max-w-[25rem]">
              {addressData.map((item, index) => (
                <li
                  key={index}
                  className="mb-5 focus:text-orange-500 hover:text-orange-500 transition"
                >
                  <AddressItems
                    href={item.href}
                    icon={item.icon}
                    text={item.text}
                  />
                </li>
              ))}
            </ul>
          </address>
        </div>
        <div className="text-gray-300">
          Powered by{" "}
          <a
            href="https://www.linkedin.com/in/kirill-litovchenko/"
            target="_blank"
            className="outline-none hover:text-orange-500 focus:text-orange-500 transition font-medium"
          >
            K_Litovchenko
          </a>
        </div>
      </div>
    </footer>
  );
}
