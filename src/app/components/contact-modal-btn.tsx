import React from "react";
import { useTranslations } from "next-intl";

type ContactModalBtnProps = {
  onClick: () => void;
};

export default function ContactModalBtn({ onClick }: ContactModalBtnProps) {
  const t = useTranslations("buttons");

  return (
    <>
      <button
        onClick={onClick}
        type="button"
        className="sm:text-xl font-semibold text-gray-100 bg-orange-500 px-7 py-3 flex items-center rounded-full outline-none focus:scale-110 focus:bg-orange-600 hover:bg-orange-600 hover:scale-110 active:scale-105 transition cursor-pointer   mx-auto"
      >
        {t("main_hero_btn")}
      </button>
    </>
  );
}
