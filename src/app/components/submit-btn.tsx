import React from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function SubmitBtn() {
  const t = useTranslations("buttons");
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group h-[50px] w-[170px] text-orange-600 flex gap-2 justify-center items-center  rounded-full outline-none focus:scale-110 focus:text-orange-700 focus:border-orange-700 hover:border-orange-700 hover:scale-110 hover:text-orange-700 active:scale-105 transition cursor-pointer border-orange-600 border mx-auto"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-orange-600"></div>
      ) : (
        <>
          {t("sbt_btn")}{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </>
      )}
    </button>
  );
}
