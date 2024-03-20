import KeyMakingHero from "@/app/components/key-making-hero";
import FormSection from "@/app/components/form-section";
import ServicesList from "@/app/components/services-list";
import { keyMakingData } from "@/lib/data/data";


export default async function KeyMaking() {

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
