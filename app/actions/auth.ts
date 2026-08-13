"use server";

import { redirect } from "next/navigation";
import type { RowDataPacket } from "mysql2";

import { query } from "../lib/db";
import {
  createSession,
  destroySession,
  getSessionUser,
  verifyPassword,
} from "../lib/auth";
import { ensureSeeded } from "../lib/seed";

interface UserRow extends RowDataPacket {
  id: number;
  password: string;
}

export interface LoginState {
  error?: string;
}

export async function loginAction(
  _prevState: LoginState | undefined,
  formData: FormData
): Promise<LoginState> {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");

  try {
    await ensureSeeded();
  } catch {
    return {
      error: "Database unreachable. Check the database connection and try again.",
    };
  }

  if (!email || !password) {
    return { error: "Missing credentials." };
  }

  try {
    const rows = await query<UserRow[]>(
      "SELECT id, password FROM users WHERE email = ? AND is_active = 1",
      [email]
    );
    const user = rows[0];
    if (!user || !verifyPassword(password, user.password)) {
      return { error: "Invalid email or password." };
    }
    await createSession(user.id);
  } catch {
    return {
      error: "Database error. Check the database connection and try again.",
    };
  }

  redirect("/admin/dashboard");
}

export async function logoutAction(): Promise<void> {
  await destroySession();
  redirect("/login");
}

export async function isAuthed(): Promise<boolean> {
  return (await getSessionUser()) !== null;
}
