"use client";

import React, { useRef } from "react";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { useModalContext } from "@/lib/hooks/use-modal-context";

export default function ContactForm() {
  const { closeModal } = useModalContext();
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <React.Fragment>
      <h3 className="text-center mb-5">
        Оставьте ваши контактные данные и мы с вами свяжемся
      </h3>

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

          toast.success("Мы свяжемся с вами в ближайшее время");

          formRef.current?.reset();
        }}
      >
        <input
          type="text"
          name="clientName"
          placeholder="Имя"
          className="h-14 mb-3 px-4 rounded-lg border-orange-600 focus:outline-2 focus:border-orange-600/50 transition-all"
          required
          maxLength={500}
        />

        <input
          name="phone"
          placeholder="Телефон"
          type="tel"
          className="h-14 mb-5 px-4 rounded-lg border-orange-600 focus:outline-2 focus:border-orange-600/50 transition-all"
          required
          maxLength={14}
        />
        <SubmitBtn />
      </form>
    </React.Fragment>
  );
}
