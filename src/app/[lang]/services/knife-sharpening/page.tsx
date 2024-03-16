// import { getDictionary } from "@/lib/utils/dictionaries";
import FormSection from "@/app/components/form-section";
import ServicesList from "@/app/components/services-list";
import type { Locale } from "@/lib/utils/i18n-config";
import { knifeSharpeningData } from "@/lib/data/data";
import KnifeSharpeningHero from "@/app/components/knife-sharpening-hero";

type KnifeSharpeningProps = {
  params: { lang: Locale };
};

export default async function KnifeSharpening({
  params: { lang },
}: KnifeSharpeningProps) {
  // const dict = await getDictionary(lang);

  return (
    <>
      <KnifeSharpeningHero>{knifeSharpeningData.mainTitle}</KnifeSharpeningHero>
      <ServicesList
        list={knifeSharpeningData.list}
        icon={knifeSharpeningData.icon}
        title={knifeSharpeningData.aboutTitle}
      >
        {knifeSharpeningData.aboutText}
      </ServicesList>
      <FormSection />
    </>
  );
}
