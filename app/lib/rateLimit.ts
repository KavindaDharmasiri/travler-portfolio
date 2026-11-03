import "server-only";

import { headers } from "next/headers";

const buckets = new Map<string, number[]>();

export async function isRateLimited(
  key: string,
  limit: number,
  windowMs: number
): Promise<boolean> {
  const h = await headers();
  const ip =
    h.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    h.get("x-real-ip") ||
    "unknown";
  const bucketKey = `${key}:${ip}`;
  const now = Date.now();
  const hits = (buckets.get(bucketKey) ?? []).filter((t) => now - t < windowMs);
  if (hits.length >= limit) {
    buckets.set(bucketKey, hits);
    return true;
  }
  hits.push(now);
  buckets.set(bucketKey, hits);
  return false;
}
