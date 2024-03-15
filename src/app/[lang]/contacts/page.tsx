// import { getDictionary } from "@/lib/utils/dictionaries";
import ContactsSection from "@/app/components/contacts-section";
import GoogleMap from "@/app/components/google-map";
import type { Locale } from "@/lib/utils/i18n-config";

type ContactsProps = {
  params: { lang: Locale };
};

export default async function Contacts({ params: { lang } }: ContactsProps) {
  // const dict = await getDictionary(lang);

  return (
    <>
      <ContactsSection />
      <GoogleMap lang={lang} />
    </>
  );
}
