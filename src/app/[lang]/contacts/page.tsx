import ContactsSection from "@/app/components/contacts-section";
import GoogleMap from "@/app/components/google-map";
import type { Locale } from "@/i18n";

type ContactsProps = {
  params: { lang: Locale };
};

export default async function Contacts({ params: { lang } }: ContactsProps) {

  return (
    <>
      <ContactsSection />
      <GoogleMap lang={lang} />
    </>
  );
}
