import "server-only";

import type { RowDataPacket } from "mysql2";

import { query, initDb } from "./db";
import { hashPassword } from "./auth";
import { products } from "./products";
import type { Product } from "./products";

interface CountRow extends RowDataPacket {
  c: number;
}

interface SettingRow extends RowDataPacket {
  key: string;
  value: string | null;
}

interface UserRow extends RowDataPacket {
  id: number;
}

async function count(table: string): Promise<number> {
  const rows = await query<CountRow[]>(`SELECT COUNT(*) AS c FROM ${table}`);
  return rows[0]?.c ?? 0;
}

async function seedUsers(): Promise<void> {
  const email = "info@travler.lk";
  const hash = hashPassword("Admin@123");
  const existing = await query<UserRow[]>(
    "SELECT id FROM users WHERE email = ? LIMIT 1",
    [email]
  );

  if (existing.length > 0) {
    await query(
      "UPDATE users SET password = ?, is_active = 1, user_type = 'admin' WHERE email = ?",
      [hash, email]
    );
    return;
  }

  await query(
    "INSERT INTO users (email, password, is_active, user_type) VALUES (?, ?, 1, 'admin')",
    [email, hash]
  );
}

async function seedProjects(): Promise<void> {
  if ((await count("projects")) > 0) return;
  for (const p of products) {
    await query(
      `INSERT INTO projects
         (slug, name, category, tech, blurb, problem, features, image, image_alt, featured, status)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'LIVE')`,
      [
        p.slug,
        p.name,
        p.category,
        p.tech.join(", "),
        p.blurb,
        p.problem,
        p.features.join("\n"),
        p.image,
        p.imageAlt,
        p.featured ? 1 : 0,
      ]
    );
  }
}

async function seedSettings(): Promise<void> {
  const rows = await query<SettingRow[]>(
    "SELECT `key`, value FROM settings WHERE `key` IN (?, ?, ?, ?)",
    ["contact_email", "phone", "location", "hero_headline"]
  );
  const existing = new Set(rows.map((r) => r.key));

  const defaults: Array<[string, string]> = [
    ["contact_email", "info@travler.lk"],
    ["phone", "076 883 1973"],
    ["location", "Colombo District, Sri Lanka"],
    ["hero_headline", "I build backend systems and full-stack platforms..."],
  ];

  for (const [key, value] of defaults) {
    if (!existing.has(key)) {
      await query("INSERT INTO settings (`key`, value) VALUES (?, ?)", [key, value]);
    }
  }
}

let seeded = false;
let seeding: Promise<void> | null = null;

export async function ensureSeeded(): Promise<void> {
  if (seeded) return;
  if (seeding) return seeding;

  seeding = (async () => {
    await initDb();
    await seedUsers();
    await seedProjects();
    await seedSettings();
    seeded = true;
  })();

  return seeding;
}

export async function getSetting(key: string): Promise<string | null> {
  try {
    await ensureSeeded();
    const rows = await query<SettingRow[]>(
      "SELECT `key`, value FROM settings WHERE `key` = ?",
      [key]
    );
    return rows[0]?.value ?? null;
  } catch {
    return null;
  }
}

export async function getSettings(): Promise<Record<string, string>> {
  try {
    await ensureSeeded();
    const rows = await query<SettingRow[]>("SELECT `key`, value FROM settings");
    const out: Record<string, string> = {};
    for (const r of rows) out[r.key] = r.value ?? "";
    return out;
  } catch {
    return {};
  }
}

export type { Product };
