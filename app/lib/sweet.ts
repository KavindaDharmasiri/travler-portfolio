"use client";

import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const THEME = {
  background: "var(--surface-background)",
  color: "var(--on-surface)",
  fontFamily: 'var(--font-ibm-plex-mono), "IBM Plex Mono", monospace',
  customClass: {
    popup: "swal-popup",
    title: "swal-title",
    htmlContainer: "swal-html",
    confirmButton: "swal-btn-confirm",
    cancelButton: "swal-btn-cancel",
    closeButton: "swal-close",
  },
  buttonsStyling: false,
  showCloseButton: true,
  allowOutsideClick: false,
  reverseButtons: true,
} as const;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function confirmDelete(opts: {
  title?: string;
  name: string;
  hint?: string;
  confirmText?: string;
}): Promise<boolean> {
  const result = await Swal.fire({
    ...THEME,
    title: `<span class="material-symbols-outlined swal-title-icon">delete_forever</span> ${
      opts.title ?? "DELETE_RECORD"
    }`,
    html: `
      <div class="swal-body">
        <p class="swal-target">${escapeHtml(opts.name)}</p>
        ${
          opts.hint
            ? `<p class="swal-hint">${escapeHtml(opts.hint)}</p>`
            : ""
        }
      </div>
    `,
    showCancelButton: true,
    confirmButtonText: opts.confirmText ?? "DELETE",
    cancelButtonText: "CANCEL",
    confirmButtonColor: "var(--error)",
  });
  return result.isConfirmed;
}

export async function notifySuccess(title: string, message?: string): Promise<void> {
  await Swal.fire({
    ...THEME,
    icon: "success",
    title,
    html: message
      ? `<div class="swal-body"><p class="swal-target">${escapeHtml(message)}</p></div>`
      : undefined,
    showCancelButton: false,
    confirmButtonText: "OK",
    confirmButtonColor: "var(--primary-container)",
    timer: 2500,
    timerProgressBar: true,
  });
}

export async function notifyError(title: string, message?: string): Promise<void> {
  await Swal.fire({
    ...THEME,
    icon: "error",
    title,
    html: message
      ? `<div class="swal-body"><p class="swal-target">${escapeHtml(message)}</p></div>`
      : undefined,
    showCancelButton: false,
    confirmButtonText: "OK",
    confirmButtonColor: "var(--error)",
  });
}
