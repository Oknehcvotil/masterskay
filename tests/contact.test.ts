import test from "node:test";
import assert from "node:assert/strict";
import { createContactHandler } from "../src/lib/contact/handler";
import { deliverContact } from "../src/lib/contact/delivery";
import { normalizePhone, validateContact } from "../src/lib/contact/validation";
import { createRateLimiter } from "../src/lib/contact/rate-limit";

const details = {
  name: "Тестовий клієнт",
  phone: "+380000000001",
  message: "Тест, не надсилати",
};
const requestId = "12345678-1234-4234-8234-123456789abc";
const body = { ...details, requestId, website: "" };
const request = (data: unknown = body, headers: Record<string, string> = {}) =>
  new Request("https://masterskaya-na-fontane.od.ua/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json", ...headers },
    body: JSON.stringify(data),
  });

test("normalizes local and formatted Ukrainian numbers without accepting arbitrary text", () => {
  assert.equal(normalizePhone("000 000 00 01"), details.phone);
  assert.equal(normalizePhone("+380 (00) 000-00-01"), details.phone);
  for (const invalid of [
    "123",
    "call 0000000001",
    "+11234567890",
    "00000000000000000000000000",
  ])
    assert.equal(normalizePhone(invalid), null);
  assert.equal(validateContact({ ...details, name: "   " }).ok, false);
  assert.equal(
    validateContact({ ...details, message: "a".repeat(1501) }).ok,
    false,
  );
});

test("a successful request passes normalized details and the idempotency key to delivery", async () => {
  let calls = 0;
  const post = createContactHandler({
    deliver: async (contact, id) => {
      calls++;
      assert.deepEqual(contact, details);
      assert.equal(id, requestId);
      return { ok: true };
    },
  });
  const response = await post(
    request({ ...body, name: `  ${details.name}  `, phone: "0000000001" }),
  );
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { ok: true });
  assert.equal(calls, 1);
});

test("invalid input, cross-origin requests, bots and oversized bodies never reach email", async () => {
  let calls = 0;
  const post = createContactHandler({
    deliver: async () => {
      calls++;
      return { ok: true };
    },
  });
  assert.equal((await post(request({ ...body, phone: "bad" }))).status, 400);
  assert.equal(
    (await post(request({ ...body, requestId: "not-a-uuid" }))).status,
    400,
  );
  assert.equal(
    (await post(request(body, { Origin: "https://other.example" }))).status,
    403,
  );
  assert.equal(
    (await post(request(body, { "Content-Type": "text/plain" }))).status,
    415,
  );
  assert.equal((await post(request({ ...body, website: "spam" }))).status, 200);
  assert.equal(
    (await post(request({ ...body, message: "x".repeat(9000) }))).status,
    413,
  );
  const invalidJson = new Request(
    "https://masterskaya-na-fontane.od.ua/api/contact",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: "{",
    },
  );
  assert.equal((await post(invalidJson)).status, 400);
  assert.equal(calls, 0);
});

test("provider rejection and missing settings cannot appear as successful submission", async (t) => {
  t.mock.method(console, "error", () => {});
  for (const reason of ["configuration", "provider"] as const) {
    const post = createContactHandler({
      deliver: async () => ({ ok: false, reason }),
    });
    const response = await post(request());
    assert.equal(response.status, reason === "configuration" ? 503 : 502);
    const data = await response.json();
    assert.equal(data.ok, undefined);
    assert.equal(typeof data.error, "string");
  }
});

test("rate limiting returns Retry-After and expires", async () => {
  const limit = createRateLimiter(2, 1000);
  assert.equal(limit("client", 0), 0);
  assert.equal(limit("client", 1), 0);
  assert.equal(limit("client", 2), 1);
  assert.equal(limit("client", 1000), 0);
  let calls = 0;
  const post = createContactHandler({
    limit: () => 60,
    deliver: async () => {
      calls++;
      return { ok: true };
    },
  });
  const response = await post(request());
  assert.equal(response.status, 429);
  assert.equal(response.headers.get("Retry-After"), "60");
  assert.equal(calls, 0);
});

test("Resend response handling checks HTTP status and receipt id; all network calls are mocked", async (t) => {
  const previous = process.env.RESEND_API_KEY;
  process.env.RESEND_API_KEY = "test_key_not_real";
  let response = new Response(JSON.stringify({ id: "test-email-id" }), {
    status: 200,
  });
  t.mock.method(globalThis, "fetch", async (url: string, init: RequestInit) => {
    assert.equal(url, "https://api.resend.com/emails");
    assert.equal(
      (init.headers as Record<string, string>)["Idempotency-Key"],
      `contact/${requestId}`,
    );
    return response;
  });
  try {
    assert.deepEqual(await deliverContact(details, requestId), { ok: true });
    response = new Response(JSON.stringify({ message: "rejected" }), {
      status: 422,
    });
    assert.deepEqual(await deliverContact(details, requestId), {
      ok: false,
      reason: "provider",
    });
    response = new Response(JSON.stringify({ error: "rejected" }), {
      status: 200,
    });
    assert.deepEqual(await deliverContact(details, requestId), {
      ok: false,
      reason: "provider",
    });
    delete process.env.RESEND_API_KEY;
    assert.deepEqual(await deliverContact(details, requestId), {
      ok: false,
      reason: "configuration",
    });
  } finally {
    if (previous === undefined) delete process.env.RESEND_API_KEY;
    else process.env.RESEND_API_KEY = previous;
  }
});
