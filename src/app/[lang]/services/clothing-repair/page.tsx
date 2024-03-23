import FormSection from "@/app/components/form-section";
import ClothingRepairHero from "@/app/components/clothing-repair-hero";
import ServicesList from "@/app/components/services-list";
import { clothingRepairData } from "@/lib/data/data";
import { unstable_setRequestLocale } from "next-intl/server";
import { Locale } from "@/i18n";

type ClothingRepairProps = {
  params: { lang: Locale };
};

export default async function ClothingRepair({
  params: { lang },
}: ClothingRepairProps) {
  unstable_setRequestLocale(lang);

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
