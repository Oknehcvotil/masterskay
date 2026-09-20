export type DeliveryResult =
  | { ok: true }
  | { ok: false; reason: "configuration" | "provider" };
