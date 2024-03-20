import FormSection from "@/app/components/form-section";
import ClothingRepairHero from "@/app/components/clothing-repair-hero";
import ServicesList from "@/app/components/services-list";
import { clothingRepairData } from "@/lib/data/data";

export default async function ClothingRepair() {
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
