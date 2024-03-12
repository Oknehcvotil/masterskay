import React from "react";

type ContactModalBtnProps = {
  onClick: () => void;
};

export default function ContactModalBtn({ onClick }: ContactModalBtnProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="text-orange-600 px-7 py-3 flex items-center rounded-full outline-none focus:scale-110 focus:text-orange-700 focus:border-orange-700 hover:border-orange-700 hover:scale-110 hover:text-orange-700 active:scale-105 transition cursor-pointer border-orange-600 border mx-auto"
    >
      Получить консультацию
    </button>
  );
}
