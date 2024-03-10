// import { getDictionary } from "@/lib/utils/dictionaries";
import type { Locale } from "@/lib/utils/i18n-config";

type ContactsProps = {
  params: { lang: Locale };
};

export default async function Contacts({ params: { lang } }: ContactsProps) {
  // const dict = await getDictionary(lang);

  return <>Contacts</>;
}
