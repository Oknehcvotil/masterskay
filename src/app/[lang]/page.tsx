import { getDictionary } from "../../lib/utils/dictionaries";
import type { Locale } from "@/src/lib/utils/i18n-config";

type HomeProps = {
  params: { lang: Locale };
};

export default async function Home({ params: { lang } }: HomeProps) {
  const dict = await getDictionary(lang);

  return <main>{dict.welcom.hi}</main>;
}
