"use server";

import { revalidatePath } from "next/cache";

import { query } from "../lib/db";
import { ensureSeeded } from "../lib/seed";
import { getSessionUser } from "../lib/auth";

export interface SaveSettingsState {
  ok?: boolean;
  error?: string;
}

const SETTING_KEYS = ["contact_email", "phone", "location", "hero_headline"];

export async function saveSettingsAction(
  _prevState: SaveSettingsState | undefined,
  formData: FormData
): Promise<SaveSettingsState> {
  const user = await getSessionUser();
  if (!user) return { error: "Not authorized." };

  try {
    await ensureSeeded();
    for (const key of SETTING_KEYS) {
      const value = String(formData.get(key) ?? "").trim();
      await query(
        "INSERT INTO settings (`key`, value) VALUES (?, ?) ON DUPLICATE KEY UPDATE value = ?",
        [key, value, value]
      );
    }
  } catch {
    return { error: "Could not save settings. Please try again." };
  }

  revalidatePath("/admin/settings");
  revalidatePath("/contact");
  revalidatePath("/");

  return { ok: true };
}
