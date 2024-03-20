import React from "react";
import SectionHeading from "./section-heading";
import ContactForm from "./contact-form";

export default function FormSection() {
  return (
    <section className="py-14 px-2">
      <div className="mx-auto max-w-[42rem]">
        <SectionHeading>form.main_title</SectionHeading>
        <ContactForm />
      </div>
    </section>
  );
}
