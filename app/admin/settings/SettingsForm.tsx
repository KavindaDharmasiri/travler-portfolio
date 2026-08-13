"use client";

import { useActionState } from "react";
import { saveSettingsAction } from "../../actions/settings";

const initial = { ok: false, error: "" };

export default function SettingsForm({
  initial: values,
}: {
  initial: Record<string, string>;
}) {
  const [state, formAction, pending] = useActionState(
    saveSettingsAction,
    initial
  );

  return (
    <form action={formAction}>
      <div className="toolbar">
        <div>
          <span className="badge mb-2">Admin / Settings</span>
          <h1 className="headline-lg">Site Settings</h1>
        </div>
        <button type="submit" className="btn btn-primary" disabled={pending}>
          {pending ? "Saving..." : "Save Changes"}
        </button>
      </div>

      {state.ok && (
        <div className="mt-4 border border-primary-container/40 bg-primary-container/5 px-3 py-2 body-sm text-primary">
          Settings saved.
        </div>
      )}
      {state.error && (
        <div className="mt-4 border border-error bg-error/5 px-3 py-2 body-sm text-error">
          {state.error}
        </div>
      )}

      <div className="panel" style={{ padding: "1.5rem" }}>
        <span className="code-label-sm text-muted">[CONTACT / RUNTIME]</span>
        <div className="mt-6">
          <div className="field">
            <label className="field-label" htmlFor="contact_email">
              Contact Email
            </label>
            <input
              id="contact_email"
              name="contact_email"
              className="input"
              type="email"
              defaultValue={values.contact_email ?? "info@travler.lk"}
            />
          </div>
          <div className="field">
            <label className="field-label" htmlFor="phone">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              className="input"
              type="tel"
              placeholder="+94 ..."
              defaultValue={values.phone ?? ""}
            />
          </div>
          <div className="field">
            <label className="field-label" htmlFor="location">
              Location
            </label>
            <input
              id="location"
              name="location"
              className="input"
              type="text"
              defaultValue={values.location ?? "Colombo District, Sri Lanka"}
            />
          </div>
          <div className="field">
            <label className="field-label" htmlFor="hero_headline">
              Hero Headline
            </label>
            <textarea
              id="hero_headline"
              name="hero_headline"
              className="textarea"
              defaultValue={
                values.hero_headline ??
                "I build backend systems and full-stack platforms..."
              }
            />
          </div>
        </div>
      </div>

      <p className="body-sm text-muted mt-6">
        These values are stored in the database and reflected across the site.
      </p>
    </form>
  );
}
