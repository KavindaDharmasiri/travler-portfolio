"use client";

import { useActionState } from "react";
import { subscribeNewsletterAction } from "../actions/newsletter";

const initial = { ok: false, error: "" };

export default function NewsletterForm() {
  const [state, formAction, pending] = useActionState(
    subscribeNewsletterAction,
    initial
  );

  if (state.ok) {
    return (
      <p className="font-code-label-sm text-code-label-sm text-secondary">
        Subscribed. Thanks!
      </p>
    );
  }

  return (
    <form action={formAction} className="flex gap-2 w-full max-w-md">
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <input
        type="email"
        name="email"
        required
        placeholder="you@company.com"
        className="flex-1 bg-white/70 backdrop-blur border border-grid-line px-3 py-2 font-code-label-sm text-code-label-sm focus:border-primary-container focus:outline-none"
      />
      <button
        type="submit"
        disabled={pending}
        className="bg-primary-container text-on-tertiary font-code-label-sm px-4 py-2 uppercase tracking-wider border border-primary-container disabled:opacity-60"
      >
        {pending ? "..." : "Subscribe"}
      </button>
      {state.error && (
        <span className="font-code-label-sm text-code-label-sm text-error">
          {state.error}
        </span>
      )}
    </form>
  );
}
