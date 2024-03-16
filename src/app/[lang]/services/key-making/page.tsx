// import { getDictionary } from "@/lib/utils/dictionaries";
import KeyMakingHero from "@/app/components/key-making-hero";
import FormSection from "@/app/components/form-section";
import ServicesList from "@/app/components/services-list";
import type { Locale } from "@/lib/utils/i18n-config";
import { keyMakingData } from "@/lib/data/data";

type KeyMakingProps = {
  params: { lang: Locale };
};

export default async function KeyMaking({
  params: { lang },
}: KeyMakingProps) {
  // const dict = await getDictionary(lang);

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
