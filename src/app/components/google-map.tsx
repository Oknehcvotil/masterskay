import React from "react";
import { mapUrls } from "@/lib/data/data";

type GoogleMapProps = {
  lang: "ua" | "en" | "ru";
};

export default function GoogleMap({ lang }: GoogleMapProps) {
  return (
    <section>
      <iframe
        src={mapUrls[lang]}
        width="100%"
        height={450}
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
}
