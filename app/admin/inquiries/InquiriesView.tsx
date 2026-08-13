"use client";

import { useState } from "react";
import {
  updateInquiryStatusAction,
  deleteInquiryAction,
} from "../../actions/inquiries";
import { confirmDelete } from "../../lib/sweet";
import type { InquiryItem } from "../../lib/inquiries";

export interface InquiriesViewProps {
  items: InquiryItem[];
  title: string;
  subtitle: string;
  emptyMessage: string;
}

export default function InquiriesView({
  items,
  title,
  subtitle,
  emptyMessage,
}: InquiriesViewProps) {
  const [selectedId, setSelectedId] = useState<number | null>(
    items[0]?.id ?? null
  );

  const selected = items.find((i) => i.id === selectedId) ?? null;

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] gap-stack-md text-center">
        <span className="material-symbols-outlined text-5xl text-slate-data">
          inbox
        </span>
        <h2 className="font-headline-lg text-headline-lg text-on-surface">
          {title}
        </h2>
        <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">
          {emptyMessage}
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-160px)] overflow-hidden">
      {/* Inquiries List (Left Pane) */}
      <section className="w-full md:w-1/3 border-r border-grid-line flex flex-col h-full bg-surface-background relative z-10">
        <div className="p-gutter border-b border-grid-line bg-surface-container-lowest">
          <div className="flex justify-between items-center mb-stack-sm">
            <h2 className="font-code-label-lg text-code-label-lg uppercase tracking-wider text-primary">
              {title}
            </h2>
            <span className="font-code-label-sm text-code-label-sm bg-surface-variant text-on-surface-variant px-2 py-1 rounded">
              {items.length} RECORD{items.length === 1 ? "" : "S"}
            </span>
          </div>
          <p className="font-code-label-sm text-code-label-sm text-slate-data uppercase">
            {subtitle}
          </p>
        </div>
        <div className="flex-1 overflow-y-auto">
          {items.map((item, i) => {
            const active = item.id === selected?.id;
            const unread = item.status === "unread";
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedId(item.id)}
                style={{ animationDelay: `${i * 45}ms` }}
                className={`rise-in w-full text-left p-gutter border-b border-grid-line cursor-pointer relative transition-colors ${
                  active
                    ? "bg-surface-container-high"
                    : "hover:bg-surface-container-low"
                }`}
              >
                {active && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r"></div>
                )}
                {unread && (
                  <span className="absolute left-3 top-3 w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
                )}
                <div className="flex justify-between items-start mb-1 pl-4">
                  <h3
                    className={`font-code-label-lg text-code-label-lg ${
                      unread ? "font-bold text-on-surface" : "text-on-surface"
                    }`}
                  >
                    {item.name}
                  </h3>
                  <span className="font-code-label-sm text-code-label-sm text-slate-data">
                    {item.createdAt}
                  </span>
                </div>
                <h4
                  className={`font-body-sm text-body-sm mb-2 pl-4 ${
                    active ? "text-primary" : "text-on-surface-variant"
                  }`}
                >
                  {item.interest || "General inquiry"}
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 pl-4">
                  {item.message}
                </p>
                <div className="mt-stack-sm pl-4">
                  <span
                    className={`inline-flex items-center gap-1 px-2 py-1 border rounded-sm uppercase text-[10px] ${
                      unread
                        ? "bg-primary-container/10 text-primary-container border-primary-container/40"
                        : "bg-surface-container text-slate-data border-grid-line"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        unread ? "bg-primary-container" : "bg-slate-data"
                      }`}
                    ></span>
                    {unread ? "Unread" : "Read"}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Detail Pane (Right Pane) */}
      <section className="flex-1 flex flex-col h-full bg-surface-background relative z-10 overflow-hidden">
        {selected ? (
          <div
            key={selected.id}
            className="rise-in flex flex-col flex-1 min-h-0"
          >
            <div className="p-gutter border-b border-grid-line bg-surface-container-lowest flex justify-between items-start">
              <div>
                <h2 className="font-headline-lg text-headline-lg text-on-surface mb-stack-xs font-bold">
                  {selected.interest || "General inquiry"}
                </h2>
                <div className="flex items-center gap-stack-md mt-stack-sm">
                  <div className="w-10 h-10 bg-surface-variant border border-grid-line rounded flex items-center justify-center font-code-label-lg text-primary">
                    {selected.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="font-code-label-lg text-code-label-lg text-on-surface">
                      {selected.name}
                    </h3>
                    <p className="font-code-label-sm text-code-label-sm text-slate-data">
                      {selected.email}
                      {selected.company ? ` · ${selected.company}` : ""}
                    </p>
                  </div>
                </div>
              </div>
              <form
                action={deleteInquiryAction}
                onSubmit={async (e) => {
                  const confirmed = await confirmDelete({
                    title: "DELETE_INQUIRY",
                    name: `${selected.name} · ${selected.email}`,
                    hint: "The inquiry record will be permanently removed.",
                  });
                  if (!confirmed) e.preventDefault();
                }}
              >
                <input type="hidden" name="id" value={selected.id} />
                <button
                  type="submit"
                  className="w-8 h-8 border border-grid-line flex justify-center items-center text-slate-data hover:text-error hover:border-error transition-colors bg-surface-background active:scale-90"
                  title="Delete"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    delete
                  </span>
                </button>
              </form>
            </div>

            <div className="flex-1 overflow-y-auto p-margin-desktop bg-surface-background">
              <div className="max-w-3xl">
                <div className="font-code-label-sm text-code-label-sm text-slate-data mb-stack-lg border-b border-grid-line pb-stack-xs inline-block">
                  MSG_ID: INQ-{String(selected.id).padStart(4, "0")} |
                  RECEIVED: {selected.createdAt}
                </div>
                <div className="font-body-md text-body-md text-on-surface space-y-stack-md leading-relaxed whitespace-pre-wrap">
                  {selected.message || "—"}
                </div>
              </div>
            </div>

            <div className="p-gutter border-t border-grid-line bg-surface-container-lowest flex items-center justify-between gap-stack-md">
              <form action={updateInquiryStatusAction} className="inline-flex">
                <input type="hidden" name="id" value={selected.id} />
                <input
                  type="hidden"
                  name="status"
                  value={selected.status === "unread" ? "read" : "unread"}
                />
                <button
                  type="submit"
                  className={`font-code-label-sm text-code-label-sm uppercase px-stack-lg py-1.5 border transition-all active:scale-95 ${
                    selected.status === "unread"
                      ? "bg-primary-container text-white border-primary-container hover:opacity-90"
                      : "bg-surface-background text-on-surface border-outline hover:border-primary-container hover:text-primary-container"
                  }`}
                >
                  {selected.status === "unread"
                    ? "Mark as Read"
                    : "Mark as Unread"}
                </button>
              </form>
              <span
                className={`inline-flex items-center gap-1 px-2 py-1 border rounded-sm uppercase text-[10px] ${
                  selected.status === "unread"
                    ? "bg-primary-container/10 text-primary-container border-primary-container/40"
                    : "bg-surface-container text-slate-data border-grid-line"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    selected.status === "unread"
                      ? "bg-primary-container animate-pulse"
                      : "bg-slate-data"
                  }`}
                ></span>
                {selected.status === "unread" ? "Unread" : "Read"}
              </span>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-slate-data font-code-label-sm text-code-label-sm uppercase">
            Select an inquiry
          </div>
        )}
      </section>
    </div>
  );
}
