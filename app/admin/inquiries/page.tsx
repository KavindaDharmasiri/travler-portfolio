import Link from "next/link";
import type { RowDataPacket } from "mysql2";
import { query } from "../../lib/db";
import { ensureSeeded } from "../../lib/seed";

export const metadata = {
  title: "Inquiries | Admin",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

interface InboxRow extends RowDataPacket {
  type: string;
  status: string;
  c: number;
}

const inboxMeta = [
  {
    type: "contact",
    href: "/admin/inquiries/contact",
    label: "Contact Inbox",
    code: "[INBOX_01]",
    icon: "mail",
    description:
      "Inquiries submitted through the public contact form.",
  },
  {
    type: "consultation",
    href: "/admin/inquiries/consultation",
    label: "Consultation Inbox",
    code: "[INBOX_02]",
    icon: "video_call",
    description:
      "Payloads submitted through the consultation request form.",
  },
] as const;

export default async function AdminInquiriesPage() {
  let rows: InboxRow[] = [];

  try {
    await ensureSeeded();
    rows = await query<InboxRow[]>(
      `SELECT type, status, COUNT(*) AS c
       FROM inquiries GROUP BY type, status`
    );
  } catch {
    // Leave empty; the page still renders with zero counts.
  }

  const stats = new Map<string, { total: number; unread: number }>();
  for (const r of rows) {
    const cur = stats.get(r.type) ?? { total: 0, unread: 0 };
    cur.total += Number(r.c);
    if (r.status === "unread") cur.unread += Number(r.c);
    stats.set(r.type, cur);
  }

  const contact = stats.get("contact") ?? { total: 0, unread: 0 };
  const consultation = stats.get("consultation") ?? { total: 0, unread: 0 };

  return (
    <div className="flex flex-col gap-stack-lg">
      <header className="border-b border-grid-line pb-stack-sm flex justify-between items-end">
        <div>
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-bold">
            Inbox System
          </h1>
          <p className="font-code-label-sm text-code-label-sm text-on-surface-variant mt-1 uppercase tracking-wider">
            Contact &amp; Consultation Channels
          </p>
        </div>
        <div className="font-code-label-sm text-code-label-sm text-slate-data border border-grid-line px-2 py-1 rounded-sm bg-surface-container-lowest">
          [MOD_02]
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        {inboxMeta.map((box) => {
          const stat = box.type === "contact" ? contact : consultation;
          return (
            <Link
              key={box.type}
              href={box.href}
              className="group bg-surface-container-lowest border border-grid-line rounded-DEFAULT p-stack-md flex flex-col justify-between hover:border-primary-container hover:bg-primary-container/5 transition-colors relative"
            >
              <div className="absolute top-0 right-0 w-3 h-3 border-l border-b border-grid-line group-hover:border-primary-container transition-colors"></div>
              <div className="flex justify-between items-start mb-stack-lg">
                <span className="font-code-label-sm text-code-label-sm uppercase text-on-surface-variant">
                  {box.label}
                </span>
                <span className="material-symbols-outlined text-primary-container text-2xl">
                  {box.icon}
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-stack-lg">
                {box.description}
              </p>
              <div className="flex items-end justify-between">
                <div>
                  <div className="font-code-label-sm text-code-label-sm text-slate-data uppercase">
                    {box.code}
                  </div>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-display-lg text-display-lg text-on-surface">
                      {stat.unread}
                    </span>
                    <span className="font-code-label-sm text-code-label-sm text-slate-data uppercase">
                      Unread / {stat.total}
                    </span>
                  </div>
                </div>
                <span className="font-code-label-sm text-code-label-sm text-primary-container uppercase flex items-center gap-1 group-hover:gap-2 transition-all">
                  Open{" "}
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
