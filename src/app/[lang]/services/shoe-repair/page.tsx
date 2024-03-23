// import { getDictionary } from "@/lib/utils/dictionaries";
import ShoeRepairHero from "@/app/components/shoe-repair-hero";
import FormSection from "@/app/components/form-section";
import ServicesList from "@/app/components/services-list";
import { shoeRepairData } from "@/lib/data/data";
import { unstable_setRequestLocale } from "next-intl/server";
import { Locale } from "@/i18n";

type ShoeRepairProps = {
  params: { lang: Locale };
};

export default async function ShoeRepair({
  params: { lang },
}: ShoeRepairProps) {
  unstable_setRequestLocale(lang);

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
