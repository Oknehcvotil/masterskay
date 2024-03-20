// import { getDictionary } from "@/lib/utils/dictionaries";
import ContactsSection from "@/app/components/contacts-section";
import GoogleMap from "@/app/components/google-map";

type ContactsProps = {
  params: { lang: "ua" | "ru" };
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
