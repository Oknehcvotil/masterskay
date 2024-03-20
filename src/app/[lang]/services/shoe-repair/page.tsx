// import { getDictionary } from "@/lib/utils/dictionaries";
import ShoeRepairHero from "@/app/components/shoe-repair-hero";
import FormSection from "@/app/components/form-section";
import ServicesList from "@/app/components/services-list";
import { shoeRepairData } from "@/lib/data/data";

export default async function ShoeRepair() {

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
