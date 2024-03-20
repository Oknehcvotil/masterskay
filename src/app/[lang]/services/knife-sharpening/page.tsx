import FormSection from "@/app/components/form-section";
import ServicesList from "@/app/components/services-list";
import { knifeSharpeningData } from "@/lib/data/data";
import KnifeSharpeningHero from "@/app/components/knife-sharpening-hero";

export default async function KnifeSharpening() {
  return (
    <>
      <KnifeSharpeningHero>{knifeSharpeningData.mainTitle}</KnifeSharpeningHero>
      <ServicesList
        list={knifeSharpeningData.list}
        icon={knifeSharpeningData.icon}
        title={knifeSharpeningData.aboutTitle}
      >
        {knifeSharpeningData.aboutText}
      </ServicesList>
      <FormSection />
    </>
  );
}
