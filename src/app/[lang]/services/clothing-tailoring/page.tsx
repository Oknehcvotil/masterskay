import ClothingTailorHero from "@/app/components/clothing-tailor-hero";
import ServicesList from "@/app/components/services-list";
import FormSection from "@/app/components/form-section";
import { clothingTailoringData } from "@/lib/data/data";
import { unstable_setRequestLocale } from "next-intl/server";
import { Locale } from "@/i18n";

type ClothingTailoringProps = {
  params: { lang: Locale };
};

export default async function ClothingTailoring({
  params: { lang },
}: ClothingTailoringProps) {
  unstable_setRequestLocale(lang);

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
