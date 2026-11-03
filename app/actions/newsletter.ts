"use server";

import { revalidatePath } from "next/cache";
import { query } from "../lib/db";
import { ensureSeeded } from "../lib/seed";
import { isRateLimited } from "../lib/rateLimit";

export interface NewsletterState {
  ok?: boolean;
  error?: string;
}

export async function subscribeNewsletterAction(
  _prevState: NewsletterState | undefined,
  formData: FormData
): Promise<NewsletterState> {
  const honeypot = String(formData.get("website") ?? "").trim();
  if (honeypot) return { ok: true };

  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "Please enter a valid email address." };
  }

  if (await isRateLimited("newsletter", 5, 60_000)) {
    return { error: "Too many requests. Please try again later." };
  }

  try {
    await ensureSeeded();
    await query(
      "INSERT INTO newsletter_subscribers (email) VALUES (?)",
      [email]
    );
  } catch {
    // Duplicate or DB error.
    return { error: "Could not subscribe. You may already be subscribed." };
  }

  revalidatePath("/");
  return { ok: true };
}
