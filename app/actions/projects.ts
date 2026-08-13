"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import { query } from "../lib/db";
import { ensureSeeded } from "../lib/seed";
import { getSessionUser } from "../lib/auth";
import { slugify } from "../lib/projects";

export interface SaveProjectState {
  error?: string;
}

const validStatuses = ["LIVE", "DEV", "ARCHIVED"];

export async function saveProjectAction(
  _prevState: SaveProjectState | undefined,
  formData: FormData
): Promise<SaveProjectState> {
  const user = await getSessionUser();
  if (!user) return { error: "Not authorized." };

  const originalSlug = String(formData.get("original_slug") ?? "").trim();
  const name = String(formData.get("name") ?? "").trim();
  const rawSlug = String(formData.get("slug") ?? "").trim();
  const category = String(formData.get("category") ?? "").trim();
  const status = String(formData.get("status") ?? "LIVE").trim();
  const techRaw = String(formData.get("tech") ?? "");
  const blurb = String(formData.get("blurb") ?? "").trim();
  const problem = String(formData.get("problem") ?? "").trim();
  const featuresRaw = String(formData.get("features") ?? "");
  const image = String(formData.get("image") ?? "").trim();
  const imageAlt = String(formData.get("image_alt") ?? "").trim();
  const featured = formData.get("featured") === "on";

  const slug = slugify(rawSlug || name);
  if (!name || !slug) return { error: "Name and slug are required." };

  const tech = techRaw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
    .join(", ");
  const features = featuresRaw
    .split(/\r?\n/)
    .map((s) => s.trim())
    .filter(Boolean)
    .join("\n");
  const finalStatus = validStatuses.includes(status) ? status : "LIVE";

  try {
    await ensureSeeded();
    if (originalSlug) {
      await query(
        `UPDATE projects SET
           slug = ?, name = ?, category = ?, status = ?, tech = ?,
           blurb = ?, problem = ?, features = ?, image = ?, image_alt = ?,
           featured = ?
         WHERE slug = ?`,
        [
          slug,
          name,
          category,
          finalStatus,
          tech,
          blurb,
          problem,
          features,
          image,
          imageAlt,
          featured ? 1 : 0,
          originalSlug,
        ]
      );
    } else {
      await query(
        `INSERT INTO projects
           (slug, name, category, status, tech, blurb, problem, features, image, image_alt, featured)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          slug,
          name,
          category,
          finalStatus,
          tech,
          blurb,
          problem,
          features,
          image,
          imageAlt,
          featured ? 1 : 0,
        ]
      );
    }
  } catch {
    return { error: "Could not save the project. Please try again." };
  }

  revalidatePath("/admin/products");
  revalidatePath("/products");
  revalidatePath(`/products/${slug}`);

  redirect("/admin/products");
}

export async function deleteProjectAction(slug: string): Promise<void> {
  const user = await getSessionUser();
  if (!user) return;

  try {
    await query("DELETE FROM projects WHERE slug = ?", [slug]);
    revalidatePath("/admin/products");
    revalidatePath("/products");
  } catch {
    // Non-fatal; delete is best-effort.
  }
}
