"use server";

import { revalidatePath } from "next/cache";
import { query } from "../lib/db";
import { ensureSeeded } from "../lib/seed";
import { getSessionUser } from "../lib/auth";

export interface InquiryFormState {
  ok?: boolean;
  error?: string;
}

function revalidateInquiryPages(): void {
  revalidatePath("/admin/inquiries");
  revalidatePath("/admin/inquiries/contact");
  revalidatePath("/admin/inquiries/consultation");
  revalidatePath("/admin/dashboard");
}

export async function createInquiryAction(
  _prevState: InquiryFormState | undefined,
  formData: FormData
): Promise<InquiryFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();
  const interest = String(formData.get("interest") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const type =
    String(formData.get("inquiry_type") ?? "").trim() === "consultation"
      ? "consultation"
      : "contact";

  if (!name || !email) {
    return { error: "Name and email are required." };
  }

  try {
    await ensureSeeded();
    await query(
      "INSERT INTO inquiries (name, email, type, company, interest, message) VALUES (?, ?, ?, ?, ?, ?)",
      [name, email, type, company || null, interest || null, message || null]
    );
  } catch {
    return { error: "Could not store your inquiry. Please try again later." };
  }

  return { ok: true };
}

export async function updateInquiryStatusAction(
  formData: FormData
): Promise<void> {
  const user = await getSessionUser();
  if (!user) return;

  const id = Number(formData.get("id"));
  const status = String(formData.get("status") ?? "");
  if (!id || !status) return;

  try {
    await query("UPDATE inquiries SET status = ? WHERE id = ?", [status, id]);
    revalidateInquiryPages();
  } catch {
    // Non-fatal; status update is best-effort.
  }
}

export async function deleteInquiryAction(formData: FormData): Promise<void> {
  const user = await getSessionUser();
  if (!user) return;

  const id = Number(formData.get("id"));
  if (!id) return;

  try {
    await query("DELETE FROM inquiries WHERE id = ?", [id]);
    revalidateInquiryPages();
  } catch {
    // Non-fatal; delete is best-effort.
  }
}
