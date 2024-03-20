import React from "react";
import type { Locale } from "@/i18n";
import Hero from "../components/hero";
import About from "../components/about";
import ServicesSection from "../components/services-section";
import Advantages from "../components/advantages";
import GoogleMap from "../components/google-map";

type HomeProps = {
  params: { lang: Locale };
};

export default async function Home({ params: { lang } }: HomeProps) {
  return (
    <React.Fragment>
      <Hero />
      <About />
      <ServicesSection />
      <Advantages />
      <GoogleMap lang={lang} />
    </React.Fragment>
  );
}
