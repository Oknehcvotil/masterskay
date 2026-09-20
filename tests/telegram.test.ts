import test, { type TestContext } from "node:test";
import assert from "node:assert/strict";
import { deliverContact } from "../src/lib/contact/delivery";
import { deliverTelegram } from "../src/lib/contact/telegram";

const details = {
  name: "Тест <b>Ім’я</b>",
  phone: "+380000000001",
  message: "Заміна блискавки *без форматування*",
};
const token = "12345:test_token_not_real";
function configure(t: TestContext, values: Record<string, string | undefined>) {
  for (const [key, value] of Object.entries(values)) {
    const old = process.env[key];
    if (value === undefined) delete process.env[key];
    else process.env[key] = value;
    t.after(() => {
      if (old === undefined) delete process.env[key];
      else process.env[key] = old;
    });
  }
  t.mock.method(console, "warn", () => {});
}
const settings = {
  TELEGRAM_BOT_TOKEN: token,
  TELEGRAM_CHAT_ID: "-100123456789",
  RESEND_API_KEY: "test_email_key",
};

test("Telegram primary sends plain text to configured chat and coalesces concurrent retries", async (t) => {
  configure(t, settings);
  let calls = 0;
  t.mock.method(globalThis, "fetch", async (url: string, init: RequestInit) => {
    calls++;
    assert.equal(url, `https://api.telegram.org/bot${token}/sendMessage`);
    const body = JSON.parse(String(init.body));
    assert.equal(body.chat_id, settings.TELEGRAM_CHAT_ID);
    assert(body.text.includes(details.name));
    assert(body.text.includes(details.phone));
    assert(body.text.includes(details.message));
    assert(body.text.includes("concurrent-request"));
    assert.equal(body.parse_mode, undefined);
    assert(body.text.length < 4096);
    return Response.json({ ok: true, result: { message_id: 1 } });
  });
  const results = await Promise.all(
    Array.from({ length: 3 }, () =>
      deliverContact(details, "concurrent-request"),
    ),
  );
  assert.deepEqual(results, [{ ok: true }, { ok: true }, { ok: true }]);
  assert.equal(calls, 1);
});

test("Telegram HTTP errors, API errors, malformed receipts and timeouts are failures and remain retryable", async (t) => {
  configure(t, { ...settings, RESEND_API_KEY: undefined });
  const responses = [
    () => Response.json({ ok: false }, { status: 403 }),
    () => Response.json({ ok: false }, { status: 200 }),
    () => Response.json({ ok: true, result: {} }),
    () => Response.json(null),
    () => new Response("not json"),
    () => {
      throw new Error("Timeout");
    },
    () => Response.json({ ok: true, result: { message_id: 5 } }),
  ];
  let calls = 0;
  t.mock.method(globalThis, "fetch", async () => responses[calls++]());
  for (let i = 0; i < 6; i++)
    assert.deepEqual(await deliverContact(details, "retry-request"), {
      ok: false,
      reason: "provider",
    });
  assert.deepEqual(await deliverContact(details, "retry-request"), {
    ok: true,
  });
  assert.equal(calls, 7);
});

test("Telegram failure uses email fallback and only acknowledges accepted delivery", async (t) => {
  configure(t, settings);
  const calls: string[] = [];
  let emailWorks = true;
  t.mock.method(globalThis, "fetch", async (url: string) => {
    calls.push(url);
    if (url.includes("api.telegram.org"))
      return Response.json({ ok: false }, { status: 429 });
    return emailWorks
      ? Response.json({ id: "email-id" })
      : Response.json({ error: "rejected" }, { status: 500 });
  });
  assert.deepEqual(await deliverContact(details, "fallback-request"), {
    ok: true,
  });
  assert.equal(calls.length, 2);
  assert.equal(calls[1], "https://api.resend.com/emails");
  emailWorks = false;
  assert.deepEqual(await deliverContact(details, "fallback-request"), {
    ok: false,
    reason: "provider",
  });
});

test("email-only deployments continue working until Telegram is configured", async (t) => {
  configure(t, {
    ...settings,
    TELEGRAM_BOT_TOKEN: undefined,
    TELEGRAM_CHAT_ID: undefined,
  });
  t.mock.method(globalThis, "fetch", async (url: string) => {
    assert.equal(url, "https://api.resend.com/emails");
    return Response.json({ id: "email-only" });
  });
  assert.deepEqual(await deliverContact(details, "email-only"), { ok: true });
});

test("missing or invalid Telegram settings never call the network", async (t) => {
  configure(t, { ...settings, RESEND_API_KEY: undefined });
  t.mock.method(globalThis, "fetch", async () => {
    assert.fail("Unexpected network call");
  });
  for (const [tokenValue, chatId] of [
    ["", "123"],
    [token, ""],
    [token, "not-a-chat"],
    ["invalid/token", "123"],
  ]) {
    process.env.TELEGRAM_BOT_TOKEN = tokenValue;
    process.env.TELEGRAM_CHAT_ID = chatId;
    assert.deepEqual(await deliverContact(details, "missing"), {
      ok: false,
      reason: "configuration",
    });
  }
});

test("deduplication expires after ten minutes", async (t) => {
  configure(t, settings);
  let now = 1000;
  let calls = 0;
  t.mock.method(Date, "now", () => now);
  t.mock.method(globalThis, "fetch", async () => {
    calls++;
    return Response.json({ ok: true, result: { message_id: calls } });
  });
  await deliverTelegram(details, "expiry-request");
  await deliverTelegram(details, "expiry-request");
  assert.equal(calls, 1);
  now += 600_001;
  await deliverTelegram(details, "expiry-request");
  assert.equal(calls, 2);
});
