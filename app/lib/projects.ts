import "server-only";

import type { RowDataPacket } from "mysql2";

import { query } from "./db";
import { ensureSeeded } from "./seed";
import { products, type Product } from "./products";

export interface Project {
  id: number;
  slug: string;
  name: string;
  category: string;
  status: string;
  tech: string[];
  blurb: string;
  problem: string;
  features: string[];
  image: string;
  imageAlt: string;
  featured: boolean;
}

interface ProjectRow extends RowDataPacket {
  id: number;
  slug: string;
  name: string;
  category: string;
  status: string;
  tech: string;
  blurb: string;
  problem: string;
  features: string;
  image: string;
  image_alt: string;
  featured: number;
}

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function splitList(value: string | null | undefined): string[] {
  if (!value) return [];
  return value
    .split(/\n|,\s*/)
    .map((s) => s.trim())
    .filter(Boolean);
}

export function fromRow(row: ProjectRow): Project {
  return {
    id: row.id,
    slug: row.slug,
    name: row.name,
    category: row.category,
    status: row.status,
    tech: splitList(row.tech),
    blurb: row.blurb,
    problem: row.problem,
    features: splitList(row.features),
    image: row.image,
    imageAlt: row.image_alt,
    featured: row.featured === 1,
  };
}

function fromStatic(p: Product): Project {
  return {
    id: -1,
    slug: p.slug,
    name: p.name,
    category: p.category,
    status: "LIVE",
    tech: p.tech,
    blurb: p.blurb,
    problem: p.problem,
    features: p.features,
    image: p.image,
    imageAlt: p.imageAlt,
    featured: Boolean(p.featured),
  };
}

export async function getAllProjects(): Promise<Project[]> {
  const rows = await query<ProjectRow[]>(
    "SELECT * FROM projects ORDER BY id ASC"
  );
  return rows.map(fromRow);
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const rows = await query<ProjectRow[]>(
    "SELECT * FROM projects WHERE slug = ? LIMIT 1",
    [slug]
  );
  return rows[0] ? fromRow(rows[0]) : null;
}

export async function loadProjects(): Promise<Project[]> {
  try {
    await ensureSeeded();
    return await getAllProjects();
  } catch {
    return products.map(fromStatic);
  }
}

export async function loadProject(slug: string): Promise<Project | null> {
  try {
    await ensureSeeded();
    return await getProjectBySlug(slug);
  } catch {
    const p = products.find((x) => x.slug === slug);
    return p ? fromStatic(p) : null;
  }
}
