import ClothingTailorHero from "@/app/components/clothing-tailor-hero";
import ServicesList from "@/app/components/services-list";
import FormSection from "@/app/components/form-section";
import { clothingTailoringData } from "@/lib/data/data";

export default async function ClothingTailoring() {

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
