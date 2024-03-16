// import { getDictionary } from "@/lib/utils/dictionaries";
import ShoeRepairHero from "@/app/components/shoe-repair-hero";
import FormSection from "@/app/components/form-section";
import ServicesList from "@/app/components/services-list";
import type { Locale } from "@/lib/utils/i18n-config";
import { shoeRepairData } from "@/lib/data/data";

type ShoeRepairProps = {
  params: { lang: Locale };
};

export default async function ShoeRepair({
  params: { lang },
}: ShoeRepairProps) {
  // const dict = await getDictionary(lang);

  return (
    <>
      <ShoeRepairHero>{shoeRepairData.mainTitle}</ShoeRepairHero>
      <ServicesList
        list={shoeRepairData.list}
        icon={shoeRepairData.icon}
        title={shoeRepairData.aboutTitle}
      >
        {shoeRepairData.aboutText}
      </ServicesList>
      <FormSection />
    </>
  );

  return <>Contacts</>;
}
