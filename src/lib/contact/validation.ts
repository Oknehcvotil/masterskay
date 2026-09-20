export type ContactDetails = { name: string; phone: string; message: string };
export type ValidationResult =
  | { ok: true; value: ContactDetails }
  | { ok: false; error: string };

export function normalizePhone(value: string): string | null {
  if (!/^[+\d\s()\-]+$/.test(value) || value.length > 24) return null;
  const digits = value.replace(/\D/g, "");
  if (/^0\d{9}$/.test(digits)) return `+38${digits}`;
  if (/^380\d{9}$/.test(digits)) return `+${digits}`;
  return null;
}

export function validateContact(input: unknown): ValidationResult {
  if (!input || typeof input !== "object" || Array.isArray(input))
    return { ok: false, error: "Перевірте дані форми." };
  const data = input as Record<string, unknown>;
  if (
    typeof data.name !== "string" ||
    !data.name.trim() ||
    data.name.trim().length > 80
  )
    return { ok: false, error: "Вкажіть ім’я — до 80 символів." };
  const phone =
    typeof data.phone === "string" ? normalizePhone(data.phone) : null;
  if (!phone)
    return {
      ok: false,
      error: "Вкажіть коректний український номер телефону.",
    };
  if (
    data.message !== undefined &&
    (typeof data.message !== "string" || data.message.length > 1500)
  )
    return { ok: false, error: "Опис має містити не більше 1500 символів." };
  return {
    ok: true,
    value: {
      name: data.name.trim(),
      phone,
      message: typeof data.message === "string" ? data.message.trim() : "",
    },
  };
}
