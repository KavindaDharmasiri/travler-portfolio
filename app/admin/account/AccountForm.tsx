"use client";

import { useActionState } from "react";
import { changePasswordAction } from "../../actions/account";

const initial = { ok: false, error: "" };

export default function AccountForm() {
  const [state, formAction, pending] = useActionState(
    changePasswordAction,
    initial
  );

  return (
    <form action={formAction} className="max-w-lg space-y-stack-md">
      <header className="mb-stack-lg border-b border-grid-line pb-stack-sm">
        <h1 className="font-headline-lg text-headline-lg text-on-surface font-bold">
          Account
        </h1>
        <p className="font-code-label-sm text-code-label-sm text-slate-data uppercase mt-1">
          Change your admin password
        </p>
      </header>

      {state.ok && (
        <div className="border border-primary-container/40 bg-primary-container/5 px-3 py-2 body-sm text-primary">
          Password updated.
        </div>
      )}
      {state.error && (
        <div className="border border-error bg-error/5 px-3 py-2 body-sm text-error">
          {state.error}
        </div>
      )}

      <div className="field">
        <label className="field-label" htmlFor="current_password">
          Current Password
        </label>
        <input
          id="current_password"
          name="current_password"
          type="password"
          className="input"
          required
        />
      </div>
      <div className="field">
        <label className="field-label" htmlFor="new_password">
          New Password
        </label>
        <input
          id="new_password"
          name="new_password"
          type="password"
          className="input"
          required
        />
      </div>
      <div className="field">
        <label className="field-label" htmlFor="confirm_password">
          Confirm New Password
        </label>
        <input
          id="confirm_password"
          name="confirm_password"
          type="password"
          className="input"
          required
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="bg-primary-container text-white font-code-label-sm text-code-label-sm uppercase px-stack-lg py-stack-sm rounded-DEFAULT hover:bg-primary-container/90 transition-colors border border-primary-container disabled:opacity-60"
      >
        {pending ? "Updating..." : "Update Password"}
      </button>
    </form>
  );
}
