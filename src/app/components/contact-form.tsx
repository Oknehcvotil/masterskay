"use client";

import React, { useRef } from "react";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function ContactForm() {
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

        toast.success("Мы свяжемся с вами в ближайшее время");

        formRef.current?.reset();
      }}
    >
      <div className="flex flex-col sm:flex-row mb-3 ">
        <input
          type="text"
          name="clientName"
          placeholder="Имя"
          className="w-full mb-3 sm:mr-3 sm:mb-0  h-14 px-4 rounded-lg border-orange-600 focus:outline-2 focus:border-orange-600/50 transition-all"
          required
          maxLength={100}
        />

        <input
          name="phone"
          placeholder="Телефон"
          type="tel"
          className="w-full h-14 px-4 rounded-lg border-orange-600 focus:outline-2 focus:border-orange-600/50 transition-all"
          required
          maxLength={14}
        />
      </div>

      <textarea
        className="h-52 sm:h-28 p-4 mb-5 rounded-lg border-orange-600 focus:outline-2 focus:border-orange-600/50 transition-all "
        name="message"
        placeholder="Your message"
        maxLength={5000}
      />
      <SubmitBtn />
    </form>
  );
}
