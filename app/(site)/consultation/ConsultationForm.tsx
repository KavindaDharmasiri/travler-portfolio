"use client";

import { useActionState } from "react";
import { createInquiryAction } from "../../actions/inquiries";

const initial = { ok: false, error: "" };

const projectVectors = [
  { value: "", label: "Select Domain Vector..." },
  { value: "fintech", label: "Financial Technology [FIN-01]" },
  { value: "ecommerce", label: "Digital Commerce [COM-02]" },
  { value: "enterprise", label: "Enterprise Systems [ENT-03]" },
  { value: "govtech", label: "Gov-Tech Infrastructure [GOV-04]" },
];

const inputClass =
  "form-input border border-outline-variant bg-surface-container-lowest p-stack-sm font-code-label-lg text-code-label-lg text-on-surface focus:border-primary-container focus:ring-0 transition-colors";

export default function ConsultationForm() {
  const [state, formAction, pending] = useActionState(
    createInquiryAction,
    initial
  );

  if (state.ok) {
    return (
      <div className="border border-grid-line bg-surface-container-lowest p-stack-lg">
        <div className="font-code-label-sm text-code-label-sm text-primary-container mb-stack-md uppercase flex items-center gap-stack-xs">
          <span className="material-symbols-outlined text-[18px]">verified</span>
          TRANSMISSION_ACK
        </div>
        <p className="font-body-md text-body-md text-on-surface">
          Link established. Your payload has been received and queued for
          review. A response will be routed to your communication node shortly.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-stack-md flex flex-col">
      <input type="hidden" name="inquiry_type" value="consultation" />
      {state.error && (
        <div className="flex items-start gap-2 border border-error bg-error/5 px-3 py-2 font-code-label-sm text-code-label-sm text-error">
          <span className="material-symbols-outlined text-[16px]">
            error_outline
          </span>
          <span>{state.error}</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
        <div className="flex flex-col">
          <label
            className="font-code-label-sm text-code-label-sm uppercase mb-stack-xs text-on-surface-variant"
            htmlFor="identity"
          >
            Identity [Name]
          </label>
          <input
            className={inputClass}
            id="identity"
            name="name"
            placeholder="Enter full designation"
            type="text"
            required
          />
        </div>
        <div className="flex flex-col">
          <label
            className="font-code-label-sm text-code-label-sm uppercase mb-stack-xs text-on-surface-variant"
            htmlFor="comm_link"
          >
            Comm Link [Email]
          </label>
          <input
            className={inputClass}
            id="comm_link"
            name="email"
            placeholder="user@domain.net"
            type="email"
            required
          />
        </div>
      </div>

      <div className="flex flex-col">
        <label
          className="font-code-label-sm text-code-label-sm uppercase mb-stack-xs text-on-surface-variant"
          htmlFor="project_vector"
        >
          Project Vector [Classification]
        </label>
        <select
          className={`${inputClass} appearance-none`}
          id="project_vector"
          name="interest"
          defaultValue=""
        >
          {projectVectors.map((v) => (
            <option key={v.value} value={v.label}>
              {v.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col">
        <label
          className="font-code-label-sm text-code-label-sm uppercase mb-stack-xs text-on-surface-variant"
          htmlFor="payload"
        >
          Payload [Specifications]
        </label>
        <textarea
          className={`${inputClass} resize-none`}
          id="payload"
          name="message"
          placeholder="Provide raw data regarding project scope, technical constraints, and desired timelines..."
          rows={5}
        />
      </div>

      <div className="pt-stack-md flex justify-end">
        <button
          className="bg-primary-container text-white font-code-label-lg text-code-label-lg uppercase px-gutter py-stack-sm hover:bg-opacity-90 transition-colors border border-primary-container flex items-center gap-stack-xs disabled:opacity-60"
          type="submit"
          disabled={pending}
        >
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            send
          </span>
          {pending ? "Transmitting..." : "Transmit Data"}
        </button>
      </div>
    </form>
  );
}
