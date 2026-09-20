"use client";

import { useRef, useState, type FormEvent } from "react";
import { formCopy } from "@/content/home";
import { normalizePhone } from "@/lib/contact/validation";
import { Icon } from "@/components/ui/icon";
import { useInquiry } from "./inquiry-provider";

export function ContactForm() {
  const { message, setMessage } = useInquiry();
  const [pending, setPending] = useState(false);
  const [result, setResult] = useState<{ ok: boolean; text: string } | null>(
    null,
  );
  const inFlight = useRef(false);
  const attempt = useRef<{ payload: string; id: string } | null>(null);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inFlight.current) return;
    const form = event.currentTarget;
    const fields = new FormData(form);
    const phoneInput = form.elements.namedItem("phone") as HTMLInputElement;
    const phone = normalizePhone(String(fields.get("phone") || ""));
    phoneInput.setCustomValidity(phone ? "" : formCopy.phoneError);
    if (!form.reportValidity()) return;
    const payload = {
      name: String(fields.get("name") || "").trim(),
      phone,
      message: message.trim(),
      website: String(fields.get("website") || ""),
    };
    const encoded = JSON.stringify(payload);
    // Reuse the key for a network retry, preventing duplicate emails after a timeout.
    if (attempt.current?.payload !== encoded)
      attempt.current = { payload: encoded, id: crypto.randomUUID() };
    inFlight.current = true;
    setPending(true);
    setResult(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, requestId: attempt.current.id }),
        signal: AbortSignal.timeout(20_000),
      });
      const data = await response.json();
      if (!response.ok || data.ok !== true) {
        setResult({
          ok: false,
          text: typeof data.error === "string" ? data.error : formCopy.failure,
        });
        return;
      }
      setResult({ ok: true, text: formCopy.success });
      form.reset();
      setMessage("");
      attempt.current = null;
    } catch {
      setResult({ ok: false, text: formCopy.failure });
    } finally {
      inFlight.current = false;
      setPending(false);
    }
  }

  return (
    <form
      className="contact-form"
      action="/api/contact"
      method="post"
      onSubmit={submit}
      aria-busy={pending}
    >
      <noscript>
        <p>
          Для надсилання форми увімкніть JavaScript або зателефонуйте за номером
          у контактах.
        </p>
      </noscript>
      <fieldset disabled={pending}>
        <legend className="sr-only">Зворотний зв’язок</legend>
        <div className="field-pair">
          <label htmlFor="name">
            {formCopy.name}
            <input
              id="name"
              name="name"
              autoComplete="given-name"
              placeholder={formCopy.namePlaceholder}
              required
              maxLength={80}
            />
          </label>
          <label htmlFor="phone">
            {formCopy.phone}
            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder={formCopy.phonePlaceholder}
              required
              maxLength={24}
              onInput={(event) => event.currentTarget.setCustomValidity("")}
            />
          </label>
        </div>
        <label htmlFor="message">
          {formCopy.message} <span>{formCopy.optional}</span>
          <textarea
            id="message"
            name="message"
            rows={3}
            maxLength={1500}
            placeholder={formCopy.messagePlaceholder}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </label>
        <div className="honeypot" aria-hidden="true">
          <label htmlFor="website">
            Website
            <input
              id="website"
              name="website"
              tabIndex={-1}
              autoComplete="off"
            />
          </label>
        </div>
        <button
          type="submit"
          className="button button-primary"
          disabled={pending}
        >
          {pending ? formCopy.pending : formCopy.submit}
          <Icon name="arrow" />
        </button>
      </fieldset>
      <p className="privacy-note">{formCopy.privacy}</p>
      <div aria-live="polite" aria-atomic="true">
        {result && (
          <p
            className={`form-result ${result.ok ? "is-success" : "is-error"}`}
            role={result.ok ? "status" : "alert"}
          >
            {result.text}
          </p>
        )}
      </div>
    </form>
  );
}
