/** Best-effort protection per server instance; use a shared store if traffic grows. */
export function createRateLimiter(maxRequests = 5, windowMs = 10 * 60 * 1000) {
  const entries = new Map<string, { count: number; expires: number }>();
  return (key: string, now = Date.now()): number => {
    for (const [id, entry] of entries)
      if (entry.expires <= now) entries.delete(id);
    const existing = entries.get(key);
    if (existing && existing.count >= maxRequests)
      return Math.ceil((existing.expires - now) / 1000);
    if (existing) existing.count += 1;
    else {
      if (entries.size >= 2048) entries.delete(entries.keys().next().value!);
      entries.set(key, { count: 1, expires: now + windowMs });
    }
    return 0;
  };
}
