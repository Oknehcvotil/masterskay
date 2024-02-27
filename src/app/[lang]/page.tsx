import { getDictionary } from "../../dictionaries";
import type { Locale } from "@/i18n-config";

type HomeProps = {
  params: { lang: Locale };
};

export default async function Home({ params: { lang } }: HomeProps) {
  const dict = await getDictionary(lang);

  return <main>{dict.welcom.hi}</main>;
}
