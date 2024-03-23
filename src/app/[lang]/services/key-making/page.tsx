import KeyMakingHero from "@/app/components/key-making-hero";
import FormSection from "@/app/components/form-section";
import ServicesList from "@/app/components/services-list";
import { keyMakingData } from "@/lib/data/data";
import { unstable_setRequestLocale } from "next-intl/server";
import { Locale } from "@/i18n";

type KeyMakingProps = {
  params: { lang: Locale };
};

export default async function KeyMaking({ params: { lang } }: KeyMakingProps) {
  unstable_setRequestLocale(lang);

  return (
    <>
      <KeyMakingHero>{keyMakingData.mainTitle}</KeyMakingHero>
      <ServicesList
        list={keyMakingData.list}
        icon={keyMakingData.icon}
        title={keyMakingData.aboutTitle}
      >
        {keyMakingData.aboutText}
      </ServicesList>
      <FormSection />
    </>
  );
}
