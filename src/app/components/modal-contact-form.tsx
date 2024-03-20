"use client";

import React, { useRef } from "react";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { useModalContext } from "@/lib/hooks/use-modal-context";
import { useTranslations } from "next-intl";

export default function ModalContactForm() {
  const t = useTranslations("form");
  const { closeModal } = useModalContext();
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={formRef}
      className="flex flex-col"
      action={async (formData) => {
        const { data, error } = await sendEmail(formData);

        if (error) {
          toast.error(error);
          return;
        }

        closeModal();

        toast.success(`${t("success")}`);

        formRef.current?.reset();
      }}
    >
      <input
        type="text"
        name="clientName"
        placeholder={t("name_label")}
        className="h-14 mb-3 px-4 rounded-lg border-orange-600 focus:outline-2 focus:border-orange-600/50 transition-all"
        required
        maxLength={100}
      />

      <input
        name="phone"
        placeholder={t("phone_label")}
        type="tel"
        className="h-14 mb-5 px-4 rounded-lg border-orange-600 focus:outline-2 focus:border-orange-600/50 transition-all"
        required
        maxLength={14}
      />
      <SubmitBtn />
    </form>
  );
}
