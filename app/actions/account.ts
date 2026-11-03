"use server";

import type { RowDataPacket } from "mysql2";
import { query } from "../lib/db";
import { getSessionUser, verifyPassword, hashPassword } from "../lib/auth";

export interface ChangePasswordState {
  ok?: boolean;
  error?: string;
}

export async function changePasswordAction(
  _prevState: ChangePasswordState | undefined,
  formData: FormData
): Promise<ChangePasswordState> {
  const user = await getSessionUser();
  if (!user) return { error: "Not authorized." };

  const current = String(formData.get("current_password") ?? "");
  const next = String(formData.get("new_password") ?? "");
  const confirm = String(formData.get("confirm_password") ?? "");

  if (!current || !next || !confirm) {
    return { error: "All fields are required." };
  }
  if (next.length < 8) {
    return { error: "New password must be at least 8 characters." };
  }
  if (next !== confirm) {
    return { error: "New passwords do not match." };
  }

  try {
    interface PasswordRow extends RowDataPacket {
      password: string;
    }
    const rows = await query<PasswordRow[]>(
      "SELECT password FROM users WHERE id = ? LIMIT 1",
      [user.id]
    );
    const stored = rows[0]?.password;
    if (!stored || !verifyPassword(current, stored)) {
      return { error: "Current password is incorrect." };
    }
    await query("UPDATE users SET password = ? WHERE id = ?", [
      hashPassword(next),
      user.id,
    ]);
  } catch {
    return { error: "Could not update password." };
  }

  return { ok: true };
}
