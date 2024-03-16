// import { getDictionary } from "@/lib/utils/dictionaries";
import type { Locale } from "@/lib/utils/i18n-config";

type ClothingTailoringProps = {
  params: { lang: Locale };
};

export default async function ClothingTailoring({ params: { lang } }: ClothingTailoringProps) {
  // const dict = await getDictionary(lang);

  return <>Contacts</>;
}
