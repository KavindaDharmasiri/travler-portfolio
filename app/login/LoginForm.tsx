"use client";

import { useActionState } from "react";
import { loginAction } from "../actions/auth";

const initial = { error: "" };

export default function LoginForm() {
  const [state, formAction, pending] = useActionState(loginAction, initial);

  return (
    <form action={formAction} className="space-y-stack-md">
      {state.error && (
        <div className="flex items-start gap-2 border border-error bg-error/5 px-3 py-2 font-code-label-sm text-code-label-sm text-error">
          <span className="material-symbols-outlined text-[16px]">
            error_outline
          </span>
          <span>{state.error}</span>
        </div>
      )}

      {/* ID_CREDENTIAL (Email) */}
      <div className="flex flex-col gap-stack-xs">
        <label
          className="font-code-label-sm text-code-label-sm text-on-surface-variant flex justify-between"
          htmlFor="email"
        >
          <span>ID_CREDENTIAL</span>
          <span className="text-slate-data">[REQ]</span>
        </label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-data">
            <span className="material-symbols-outlined text-lg">terminal</span>
          </span>
          <input
            className="schematic-input w-full pl-10 pr-3 py-3 bg-surface-container-lowest border border-grid-line font-code-label-sm text-code-label-sm text-on-surface placeholder-slate-data transition-colors"
            id="email"
            name="email"
            placeholder="admin@travler.sys"
            required
            type="email"
          />
        </div>
      </div>

      {/* ACCESS_TOKEN (Password) */}
      <div className="flex flex-col gap-stack-xs">
        <label
          className="font-code-label-sm text-code-label-sm text-on-surface-variant flex justify-between"
          htmlFor="password"
        >
          <span>ACCESS_TOKEN</span>
          <span className="text-slate-data">[REQ]</span>
        </label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-data">
            <span className="material-symbols-outlined text-lg">key</span>
          </span>
          <input
            className="schematic-input w-full pl-10 pr-3 py-3 bg-surface-container-lowest border border-grid-line font-code-label-sm text-code-label-sm text-on-surface placeholder-slate-data transition-colors"
            id="password"
            name="password"
            placeholder="••••••••••••"
            required
            type="password"
          />
        </div>
      </div>

      {/* Secondary Actions (Remember Me / Forgot) */}
      <div className="flex items-center justify-between py-stack-xs">
        <label className="flex items-center gap-2 cursor-pointer group">
          <input
            className="w-4 h-4 border border-grid-line bg-surface-container-lowest text-primary-container focus:ring-primary-container focus:ring-offset-0 rounded-none cursor-pointer"
            type="checkbox"
          />
          <span className="font-code-label-sm text-code-label-sm text-slate-data group-hover:text-on-surface transition-colors">
            MAINTAIN_SESSION
          </span>
        </label>
        <a
          className="font-code-label-sm text-code-label-sm text-primary-container hover:text-primary transition-colors border-b border-transparent hover:border-primary"
          href="#"
        >
          RESET_TOKEN
        </a>
      </div>

      {/* Primary CTA */}
      <button
        type="submit"
        disabled={pending}
        className="schematic-button btn-glow w-full mt-stack-md bg-primary-container text-on-primary font-code-label-lg text-code-label-lg py-4 border border-primary-container flex justify-center items-center gap-2 transition-all active:scale-[0.99] disabled:opacity-60"
      >
        <span className="material-symbols-outlined">
          {pending ? "hourglass_top" : "power_settings_new"}
        </span>
        {pending ? "AUTHENTICATING..." : "INITIALIZE SEQUENCE"}
      </button>
    </form>
  );
}
