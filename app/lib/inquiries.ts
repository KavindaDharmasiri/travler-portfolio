import "server-only";

import type { RowDataPacket } from "mysql2";

import { query } from "./db";
import { ensureSeeded } from "./seed";

export type InquiryType = "contact" | "consultation";

export interface InquiryItem {
  id: number;
  name: string;
  email: string;
  company: string | null;
  interest: string | null;
  message: string | null;
  status: string;
  createdAt: string;
}

interface InquiryRow extends RowDataPacket {
  id: number;
  name: string;
  email: string;
  company: string | null;
  interest: string | null;
  message: string | null;
  status: string;
  created_at: Date | string;
}

export async function getInquiries(
  type?: InquiryType
): Promise<InquiryItem[]> {
  try {
    await ensureSeeded();
    const rows = type
      ? await query<InquiryRow[]>(
          `SELECT id, name, email, company, interest, message, status, created_at
           FROM inquiries WHERE type = ? ORDER BY created_at DESC`,
          [type]
        )
      : await query<InquiryRow[]>(
          `SELECT id, name, email, company, interest, message, status, created_at
           FROM inquiries ORDER BY created_at DESC`
        );
    return rows.map((r) => ({
      id: r.id,
      name: r.name,
      email: r.email,
      company: r.company,
      interest: r.interest,
      message: r.message,
      status: r.status,
      createdAt: new Date(r.created_at).toLocaleString(),
    }));
  } catch {
    return [];
  }
}
