import { InquiryProvider } from "@/components/contact/inquiry-provider";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Story } from "@/components/sections/story";
import { RequestSection } from "@/components/sections/request";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { getBusinessJsonLd, serializeJsonLd } from "@/lib/seo";

/** Reorder sections here. Copy lives in src/content; appearance in src/styles. */
export default function HomePage() {
  return (
    <InquiryProvider>
      <main id="main">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeJsonLd(getBusinessJsonLd()),
          }}
        />
        <Hero />
        <Services />
        <Story />
        <RequestSection />
        <Faq />
        <Contact />
      </main>
    </InquiryProvider>
  );
}
