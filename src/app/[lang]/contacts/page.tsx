import ContactsSection from "@/app/components/contacts-section";
import GoogleMap from "@/app/components/google-map";
import type { Locale } from "@/i18n";
import { unstable_setRequestLocale } from "next-intl/server";

type ContactsProps = {
  params: { lang: Locale };
};

export default async function Contacts({ params: { lang } }: ContactsProps) {
  unstable_setRequestLocale(lang);

  return (
    <>
      <ContactsSection />
      <GoogleMap lang={lang} />
    </>
  );
}
