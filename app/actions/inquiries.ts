"use server";

import { revalidatePath } from "next/cache";
import nodemailer from "nodemailer";
import { query } from "../lib/db";
import { ensureSeeded } from "../lib/seed";
import { getSessionUser } from "../lib/auth";
import { isRateLimited } from "../lib/rateLimit";

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
  const honeypot = String(formData.get("website") ?? "").trim();
  if (honeypot) {
    return { ok: true };
  }

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

  if (await isRateLimited("inquiry", 5, 60_000)) {
    return { error: "Too many requests. Please try again later." };
  }

  try {
    await ensureSeeded();
    await query(
      "INSERT INTO inquiries (name, email, type, company, interest, message) VALUES (?, ?, ?, ?, ?, ?)",
      [name, email, type, company || null, interest || null, message || null]
    );

    // Optional email notification (best-effort).
    try {
      if (process.env.SMTP_HOST && process.env.ADMIN_NOTIFY_EMAIL) {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT || 587),
          secure: Number(process.env.SMTP_PORT || 587) === 465,
          auth:
            process.env.SMTP_USER && process.env.SMTP_PASS
              ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
              : undefined,
        });
        await transporter.sendMail({
          from: process.env.SMTP_FROM || process.env.SMTP_USER,
          to: process.env.ADMIN_NOTIFY_EMAIL,
          subject: `New ${type} inquiry from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || "-"}\nInterest: ${interest || "-"}\n\n${message || ""}`,
        });
      }
    } catch {
      // Email is best-effort.
    }

    revalidatePath("/admin/inquiries");
    revalidatePath("/admin/dashboard");
    revalidatePath("/admin/inquiries/contact");
    revalidatePath("/admin/inquiries/consultation");
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
