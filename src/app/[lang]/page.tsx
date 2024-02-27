import { getDictionary } from "./dictionaries/dictionaries";

type HomeProps = {
  params: { lang: string };
};

export default async function Home({ params: { lang } }: HomeProps) {
  const dict = await getDictionary(lang);

  return <main>{dict.welcom.hi}</main>;
}
