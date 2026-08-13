"use client";

import { useActionState } from "react";
import { createInquiryAction } from "../../actions/inquiries";

const initial = { ok: false, error: "" };

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(
    createInquiryAction,
    initial
  );

  if (state.ok) {
    return (
      <div className="panel" style={{ padding: "1.5rem" }}>
        <span className="badge mb-4">Transmission Received</span>
        <h3 className="body-md" style={{ fontWeight: 600 }}>
          Inquiry logged. We&apos;ll get back to you shortly.
        </h3>
        <p className="body-sm text-secondary mt-2">
          Your message has been stored and queued for review.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="panel" style={{ padding: "1.5rem" }}>
      <input type="hidden" name="inquiry_type" value="contact" />
      <span className="code-label-sm text-muted">[FORM / CONTACT]</span>
      {state.error && (
        <div className="mt-4 border border-error bg-error/5 px-3 py-2 body-sm text-error">
          {state.error}
        </div>
      )}
      <div className="mt-6">
        <div className="field">
          <label className="field-label" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            className="input"
            type="text"
            placeholder="Jane Doe"
            required
          />
        </div>
        <div className="field">
          <label className="field-label" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            className="input"
            type="email"
            placeholder="jane@company.com"
            required
          />
        </div>
        <div className="field">
          <label className="field-label" htmlFor="company">
            Company
          </label>
          <input
            id="company"
            name="company"
            className="input"
            type="text"
            placeholder="Optional"
          />
        </div>
        <div className="field">
          <label className="field-label" htmlFor="interest">
            Interested in
          </label>
          <select id="interest" name="interest" className="select">
            <option>Product development</option>
            <option>Backend / API</option>
            <option>Full-stack platform</option>
            <option>Enterprise system</option>
            <option>Other</option>
          </select>
        </div>
        <div className="field">
          <label className="field-label" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="textarea"
            placeholder="Describe your project..."
          />
        </div>
        <button type="submit" disabled={pending} className="btn btn-primary">
          {pending ? "Sending..." : "Send Inquiry"}
        </button>
      </div>
    </form>
  );
}
