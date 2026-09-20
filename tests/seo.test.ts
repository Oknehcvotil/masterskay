import test from "node:test";
import assert from "node:assert/strict";
import { getBusinessJsonLd, serializeJsonLd } from "../src/lib/seo";
import { site, homeUrl } from "../src/content/site";
import { services } from "../src/content/services";
import sitemap from "../src/app/sitemap";
import redirects from "../config/redirects.mjs";

test("Sunday opens at noon in both the source data and Google markup", () => {
  assert.equal(
    site.hours.find((hours) => hours.days.some((day) => day === "Sunday"))
      ?.opens,
    "12:00",
  );
  const sunday = getBusinessJsonLd().openingHoursSpecification.find((hours) =>
    hours.dayOfWeek.includes("Sunday"),
  );
  assert.equal(sunday?.opens, "12:00");
  assert.equal(sunday?.closes, "17:00");
  assert.deepEqual(
    sitemap().map((entry) => entry.url),
    [homeUrl],
  );
});

test("all original service/contacts URLs redirect to existing sections without locale loops", () => {
  for (const prefix of ["", "/ua", "/ru", "/en"]) {
    for (const service of services) {
      const rule = redirects.find(
        (item) => item.source === `${prefix}/services/${service.legacySlug}`,
      );
      assert.equal(rule?.destination, `/ua#${service.id}`);
      assert.equal(rule?.permanent, true);
    }
    assert.equal(
      redirects.find((item) => item.source === `${prefix}/contacts`)
        ?.destination,
      "/ua#contact",
    );
  }
  assert(!redirects.some((item) => item.source === "/ua"));
  assert(!redirects.some((item) => item.source === "/api/contact"));
  assert.equal(
    new Set(redirects.map((item) => item.source)).size,
    redirects.length,
  );
});

test("JSON-LD serialization prevents closing the script element", () => {
  assert(
    !serializeJsonLd({ text: "</script><script>alert(1)</script>" }).includes(
      "<",
    ),
  );
});
