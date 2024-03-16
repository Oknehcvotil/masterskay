"use server";

import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils/form";
import ContactFormEmail from "../email/contact-form-email";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderPhone = formData.get("phone");
  const clientName = formData.get("clientName");
  const message = formData.get("message");

  if (!validateString(senderPhone, 14)) {
    return {
      error: "Invalid phone number",
    };
  }

  if (!validateString(clientName, 100)) {
    return {
      error: "Invalid name",
    };
  }

  if (message && !validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;

  try {
    await resend.emails.send({
      from: "My web site contact form <onboarding@resend.dev>",
      to: "litovchenko.inna1970@gmail.com",
      subject: "Номер телефона клиента с запросом перезвонить",
      react: React.createElement(ContactFormEmail, {
        name: clientName as string,
        phone: senderPhone as string,
        message: message as string,
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
