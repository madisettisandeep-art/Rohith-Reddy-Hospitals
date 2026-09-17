interface RateLimitRecord {
  count: number;
  resetAt: number;
}

const rateLimitStore = new Map<string, RateLimitRecord>();

/**
 * Lightweight sliding-window in-memory rate limiter.
 * Protects public appointment and contact forms from spam.
 */
export function checkRateLimit(
  identifier: string,
  limit: number = 5,
  windowMs: number = 60 * 1000
): { success: boolean; remaining: number; reset: number } {
  const now = Date.now();
  const record = rateLimitStore.get(identifier);

  // Clean up expired records occasionally
  if (rateLimitStore.size > 1000) {
    rateLimitStore.forEach((val, key) => {
      if (val.resetAt <= now) {
        rateLimitStore.delete(key);
      }
    });
  }

  if (!record || record.resetAt <= now) {
    rateLimitStore.set(identifier, {
      count: 1,
      resetAt: now + windowMs,
    });
    return { success: true, remaining: limit - 1, reset: now + windowMs };
  }

  if (record.count >= limit) {
    return { success: false, remaining: 0, reset: record.resetAt };
  }

  record.count += 1;
  return { success: true, remaining: limit - record.count, reset: record.resetAt };
}
