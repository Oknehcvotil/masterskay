import FormSection from "@/app/components/form-section";
import ServicesList from "@/app/components/services-list";
import { knifeSharpeningData } from "@/lib/data/data";
import KnifeSharpeningHero from "@/app/components/knife-sharpening-hero";
import { unstable_setRequestLocale } from "next-intl/server";
import { Locale } from "@/i18n";

type KnifeSharpeningProps = {
  params: { lang: Locale };
};

export default async function KnifeSharpening({
  params: { lang },
}: KnifeSharpeningProps) {
  unstable_setRequestLocale(lang);
  
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
