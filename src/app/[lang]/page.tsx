import React from "react";
import { getDictionary } from "../../lib/utils/dictionaries";
import type { Locale } from "@/lib/utils/i18n-config";
import Hero from "../components/hero";
import About from "../components/about";
import ServicesSection from "../components/services-section";
import Advantages from "../components/advantages";

type HomeProps = {
  params: { lang: Locale };
};

export default async function Home({ params: { lang } }: HomeProps) {
  const dict = await getDictionary(lang);

  return (
    <React.Fragment>
      <Hero />
      <About />
      <ServicesSection />
      <Advantages />
    </React.Fragment>
  );
}
