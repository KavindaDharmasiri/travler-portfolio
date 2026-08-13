import Link from "next/link";
import type { RowDataPacket } from "mysql2";
import AnimatedNumber from "../../components/AnimatedNumber";
import { query } from "../../lib/db";
import { ensureSeeded } from "../../lib/seed";

export const metadata = {
  title: "Dashboard | Admin",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

interface CountRow extends RowDataPacket {
  c: number;
}

interface RecentInquiry extends RowDataPacket {
  id: number;
  name: string;
  interest: string | null;
  status: string;
  created_at: Date | string;
}

const statusClass: Record<string, string> = {
  unread:
    "bg-primary-container/10 text-primary-container border-primary-container/40",
  read: "bg-surface-container text-slate-data border-grid-line",
};

const metricCardClass =
  "lift-hover bg-surface-container-lowest border border-grid-line rounded-DEFAULT p-stack-md flex flex-col justify-between hover:border-primary-container hover:bg-primary-container/5 group relative";

export default async function AdminDashboardPage() {
  let projectCount = 0;
  let newInquiries = 0;
  let recent: RecentInquiry[] = [];

  try {
    await ensureSeeded();
    const [projects, inquiries, recentRows] = await Promise.all([
      query<CountRow[]>(
        "SELECT COUNT(*) AS c FROM projects WHERE status = 'LIVE'"
      ),
      query<CountRow[]>(
        "SELECT COUNT(*) AS c FROM inquiries WHERE status = 'unread'"
      ),
      query<RecentInquiry[]>(
        `SELECT id, name, interest, status, created_at
         FROM inquiries ORDER BY created_at DESC LIMIT 5`
      ),
    ]);
    projectCount = projects[0]?.c ?? 0;
    newInquiries = inquiries[0]?.c ?? 0;
    recent = recentRows;
  } catch {
    // Dashboard still renders with zeros.
  }

  return (
    <>
      {/* Page Header */}
      <header className="mb-stack-lg flex justify-between items-end border-b border-grid-line pb-stack-sm">
        <div>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight font-bold">
            System Overview
          </h2>
          <p className="font-code-label-sm text-code-label-sm text-on-surface-variant mt-1 uppercase tracking-wider">
            Metrics &amp; Recent Activity
          </p>
        </div>
        <div className="font-code-label-sm text-code-label-sm text-slate-data border border-grid-line px-2 py-1 rounded-sm bg-surface-container-lowest">
          [MOD_01]
        </div>
      </header>

      {/* Metrics Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-stack-lg">
        <div className={metricCardClass}>
          <div className="absolute top-0 right-0 w-3 h-3 border-l border-b border-grid-line group-hover:border-primary-container transition-colors"></div>
          <div className="flex justify-between items-start mb-stack-lg">
            <span className="font-code-label-sm text-code-label-sm uppercase text-on-surface-variant">
              Total Projects
            </span>
            <span className="material-symbols-outlined text-primary-container text-xl">
              folder_managed
            </span>
          </div>
          <div className="flex items-baseline gap-2">
            <AnimatedNumber
              value={projectCount}
              className="font-display-lg text-display-lg text-on-surface"
            />
            <span className="font-code-label-sm text-code-label-sm text-slate-data uppercase">
              Live
            </span>
          </div>
        </div>

        <div className={metricCardClass}>
          <div className="absolute top-0 right-0 w-3 h-3 border-l border-b border-grid-line group-hover:border-primary-container transition-colors"></div>
          <div className="flex justify-between items-start mb-stack-lg">
            <span className="font-code-label-sm text-code-label-sm uppercase text-on-surface-variant">
              Active Inquiries
            </span>
            <span className="material-symbols-outlined text-primary-container text-xl">
              inbox
            </span>
          </div>
          <div className="flex items-baseline gap-2">
            <AnimatedNumber
              value={newInquiries}
              className="font-display-lg text-display-lg text-on-surface"
            />
            <span className="font-code-label-sm text-code-label-sm text-slate-data uppercase">
              Unread
            </span>
          </div>
        </div>

        {/* System Load */}
        <div className={metricCardClass}>
          <div className="absolute top-0 right-0 w-3 h-3 border-l border-b border-grid-line group-hover:border-primary-container transition-colors"></div>
          <div className="flex justify-between items-start mb-stack-lg">
            <span className="font-code-label-sm text-code-label-sm uppercase text-on-surface-variant">
              System Load
            </span>
            <span className="material-symbols-outlined text-primary-container text-xl">
              memory
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-baseline gap-2">
              <span className="font-display-lg text-display-lg text-on-surface">
                42%
              </span>
            </div>
            <div className="w-full bg-grid-line h-1 mt-2">
              <div className="bg-secondary-container h-full w-[42%]"></div>
            </div>
            <span className="font-code-label-sm text-code-label-sm text-on-secondary-container bg-surface-container px-2 py-0.5 rounded-sm self-start mt-2 uppercase">
              Stable
            </span>
          </div>
        </div>
      </section>

      {/* Data Table Section */}
      <section className="bg-surface-container-lowest border border-grid-line rounded-DEFAULT relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-container to-secondary-container"></div>
        <div className="px-stack-md py-stack-sm border-b border-grid-line bg-surface-container-lowest flex justify-between items-center">
          <h3 className="font-code-label-lg text-code-label-lg text-on-surface uppercase tracking-wide">
            Recent Inquiries
          </h3>
          <Link
            href="/admin/inquiries"
            className="font-code-label-sm text-code-label-sm text-primary-container uppercase hover:underline flex items-center gap-1"
          >
            View All{" "}
            <span className="material-symbols-outlined text-[14px]">
              arrow_forward
            </span>
          </Link>
        </div>
        <div className="overflow-x-auto">
          {recent.length === 0 ? (
            <div className="p-stack-md font-code-label-sm text-code-label-sm text-slate-data uppercase">
              No inquiries yet.
            </div>
          ) : (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-high border-b border-grid-line">
                  <th className="py-3 px-stack-md font-code-label-sm text-code-label-sm text-on-surface-variant uppercase tracking-wider w-24">
                    ID
                  </th>
                  <th className="py-3 px-stack-md font-code-label-sm text-code-label-sm text-on-surface-variant uppercase tracking-wider">
                    Client
                  </th>
                  <th className="py-3 px-stack-md font-code-label-sm text-code-label-sm text-on-surface-variant uppercase tracking-wider">
                    Project Type
                  </th>
                  <th className="py-3 px-stack-md font-code-label-sm text-code-label-sm text-on-surface-variant uppercase tracking-wider text-right">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="font-code-label-sm text-code-label-sm">
                {recent.map((row, i) => (
                  <tr
                    key={row.id}
                    style={{ animationDelay: `${i * 60}ms` }}
                    className={`rise-in border-b border-grid-line hover:bg-primary-container/5 transition-colors ${
                      row.status === "unread"
                        ? "bg-surface-container-low"
                        : ""
                    }`}
                  >
                    <td className="py-3 px-stack-md text-slate-data">
                      INQ-{String(row.id).padStart(4, "0")}
                    </td>
                    <td className="py-3 px-stack-md text-on-surface font-body-sm text-body-sm">
                      {row.name}
                    </td>
                    <td className="py-3 px-stack-md text-on-surface-variant">
                      {row.interest || "General inquiry"}
                    </td>
                    <td className="py-3 px-stack-md text-right">
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-1 border rounded-sm uppercase text-[10px] ${
                          statusClass[row.status] ?? statusClass.read
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            row.status === "unread"
                              ? "bg-primary-container animate-pulse"
                              : "bg-slate-data"
                          }`}
                        ></span>
                        {row.status === "unread" ? "Unread" : "Read"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </section>
    </>
  );
}
