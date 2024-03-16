// import { getDictionary } from "@/lib/utils/dictionaries";
import FormSection from "@/app/components/form-section";
import ClothingRepairHero from "@/app/components/clothing-repair-hero";
import ServicesList from "@/app/components/services-list";
import type { Locale } from "@/lib/utils/i18n-config";
import { clothingRepairData } from "@/lib/data/data";

type ClothingTailoringProps = {
  params: { lang: Locale };
};

export default async function ClothingTailoring({
  params: { lang },
}: ClothingTailoringProps) {
  // const dict = await getDictionary(lang);

  return (
    <>
      <ClothingRepairHero>{clothingRepairData.mainTitle}</ClothingRepairHero>
      <ServicesList
        list={clothingRepairData.list}
        icon={clothingRepairData.icon}
        title={clothingRepairData.aboutTitle}
      >
        {clothingRepairData.aboutText}
      </ServicesList>
      <FormSection />
    </>
  );
}
