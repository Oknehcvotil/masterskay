// Run against a production build. The child server has no email key: no real mail is sent.
import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { setTimeout as delay } from "node:timers/promises";
import redirects from "../config/redirects.mjs";

const base = "http://127.0.0.1:3100";
const server = spawn(
  process.execPath,
  [
    "node_modules/next/dist/bin/next",
    "start",
    "--hostname",
    "127.0.0.1",
    "--port",
    "3100",
  ],
  {
    env: { ...process.env, RESEND_API_KEY: "", NEXT_TELEMETRY_DISABLED: "1" },
    stdio: ["ignore", "pipe", "pipe"],
  },
);
let output = "";
server.stdout.on("data", (chunk) => {
  output += chunk;
});
server.stderr.on("data", (chunk) => {
  output += chunk;
});

try {
  for (let i = 0; i < 100 && !output.includes("Ready in"); i++) {
    if (server.exitCode !== null)
      throw new Error(`Test server failed: ${output}`);
    await delay(100);
  }
  assert(output.includes("Ready in"), "Test server did not become ready");
  const page = await fetch(base + "/ua");
  assert.equal(page.status, 200);
  const html = await page.text();
  assert(html.includes('<html lang="uk"'));
  assert.equal((html.match(/<h1\b/g) || []).length, 1);
  assert(
    html.includes(
      'rel="canonical" href="https://masterskaya-na-fontane.od.ua/ua"',
    ),
  );
  assert(html.includes('property="og:locale" content="uk_UA"'));
  assert(html.includes('action="/api/contact" method="post"'));
  const schema = JSON.parse(
    html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1],
  );
  assert.equal(
    schema.openingHoursSpecification.find((hours) =>
      hours.dayOfWeek.includes("Sunday"),
    ).opens,
    "12:00",
  );
  assert(html.includes("<time>12:00</time>"));
  assert(!html.includes("<time>11:00</time>"));
  for (const id of [
    "main",
    "top",
    "services",
    "story",
    "request",
    "contact",
    "clothing-repair",
    "clothing-tailoring",
    "shoe-repair",
    "key-making",
    "knife-sharpening",
  ])
    assert(html.includes(`id="${id}"`));
  assert(html.includes("https://www.google.com/maps/embed?"));
  for (const rule of redirects) {
    const response = await fetch(base + rule.source, { redirect: "manual" });
    assert.equal(response.status, 308, rule.source);
    assert.equal(
      response.headers.get("location"),
      rule.destination,
      rule.source,
    );
  }
  const sitemap = await fetch(base + "/sitemap.xml");
  assert.equal(sitemap.status, 200);
  const xml = await sitemap.text();
  assert(xml.includes("<loc>https://masterskaya-na-fontane.od.ua/ua</loc>"));
  assert.equal((xml.match(/<loc>/g) || []).length, 1);
  const robots = await fetch(base + "/robots.txt");
  assert.equal(robots.status, 200);
  assert(
    (await robots.text()).includes(
      "Sitemap: https://masterskaya-na-fontane.od.ua/sitemap.xml",
    ),
  );
  assert.equal((await fetch(base + "/ua/no-such-page")).status, 404);
  const cssPaths = [...html.matchAll(/href="([^\"]+\.css[^\"]*)"/g)].map(
    (match) => match[1],
  );
  assert(cssPaths.length > 0);
  for (const path of cssPaths) {
    const response = await fetch(base + path);
    assert.equal(response.status, 200);
    assert(!(await response.text()).includes("fonts.googleapis.com"));
  }
  assert.equal(
    (
      await fetch(base + "/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "Тест", phone: "bad" }),
      })
    ).status,
    400,
  );
  const response = await fetch(base + "/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "Тест",
      phone: "+380000000001",
      message: "Тест без відправлення",
      website: "",
      requestId: "12345678-1234-4234-8234-123456789abc",
    }),
  });
  assert.equal(response.status, 503);
  assert.equal((await response.json()).ok, undefined);
  console.log(
    `HTTP checks passed: ${redirects.length} redirects, Ukrainian page, SEO, map, 404, fonts and form errors. No emails sent.`,
  );
} finally {
  server.kill("SIGTERM");
}
