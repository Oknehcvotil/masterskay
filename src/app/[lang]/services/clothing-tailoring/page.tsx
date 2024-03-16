// import { getDictionary } from "@/lib/utils/dictionaries";
import type { Locale } from "@/lib/utils/i18n-config";
import ClothingTailorHero from "@/app/components/clothing-tailor-hero";
import ServicesList from "@/app/components/services-list";
import FormSection from "@/app/components/form-section";
import { clothingTailoringData } from "@/lib/data/data";

type ClothingTailoringProps = {
  params: { lang: Locale };
};

export default async function ClothingTailoring({
  params: { lang },
}: ClothingTailoringProps) {
  // const dict = await getDictionary(lang);

  return (
    <>
      <ClothingTailorHero>{clothingTailoringData.mainTitle}</ClothingTailorHero>
      <ServicesList
        icon={clothingTailoringData.icon}
        title={clothingTailoringData.aboutTitle}
      >
        {clothingTailoringData.aboutText}
      </ServicesList>
      <FormSection />
    </>
  );
}
