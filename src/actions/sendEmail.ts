"use server";

import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils/form";
import ContactFormEmail from "../email/contact-form-email";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderPhone = formData.get("phone");
  const clientName = formData.get("clientName");

  if (!validateString(senderPhone, 100)) {
    return {
      error: "Invalid phone sender",
    };
  }

  if (!validateString(clientName, 5000)) {
    return {
      error: "Invalid client name",
    };
  }

  let data;

  try {
    await resend.emails.send({
      from: "<onboarding@resend.dev>",
      to: "litovchenko.inna1970@gmail.com",
      subject: "Номер телефона клиента с запросом перезвонить",
      react: React.createElement(ContactFormEmail, {
        name: clientName as string,
        phone: senderPhone as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
