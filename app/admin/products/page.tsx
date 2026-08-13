import Link from "next/link";
import SmartImage from "../../components/SmartImage";
import { loadProjects } from "../../lib/projects";
import DeleteProject from "./DeleteProject";

export const metadata = {
  title: "Project Registry | Admin",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function AdminProductsPage() {
  const projects = await loadProjects();
  const count = projects.length;

  return (
    <>
      {/* Header */}
      <header className="-mx-margin-mobile md:-mx-margin-desktop px-margin-mobile md:px-margin-desktop py-stack-lg border-b border-grid-line bg-surface-background/80 backdrop-blur-sm sticky top-0 z-40 flex items-center justify-between">
        <div>
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-stack-xs font-bold">
            Project Registry
          </h1>
          <p className="font-code-label-sm text-code-label-sm text-slate-data uppercase">
            Overview // {count} Active Systems Detected
          </p>
        </div>
        <Link
          href="/admin/products/new"
          className="bg-primary-container text-white font-code-label-lg text-code-label-lg py-stack-sm px-stack-lg rounded-DEFAULT uppercase hover:bg-primary-container/90 transition-colors flex items-center gap-2 border border-primary-container"
        >
          <span className="material-symbols-outlined text-[18px]">add</span>
          NEW_PROJECT
        </Link>
      </header>

      {/* Content Area */}
      <div className="py-stack-lg flex flex-col gap-stack-lg">
        {/* Tools Bar */}
        <div className="flex flex-col md:flex-row gap-gutter items-center justify-between">
          <div className="relative w-full md:w-96">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-data">
              search
            </span>
            <input
              className="w-full bg-white border border-outline-variant focus:border-primary-container focus:ring-1 focus:ring-primary-container rounded-DEFAULT py-stack-sm pl-10 pr-4 font-code-label-lg text-code-label-lg placeholder-slate-data text-on-surface transition-all"
              placeholder="SEARCH_PROJECTS..."
              type="text"
            />
          </div>
          <div className="flex gap-stack-sm w-full md:w-auto">
            <button
              type="button"
              className="flex items-center gap-2 border border-outline-variant bg-white px-stack-md py-stack-sm rounded-DEFAULT font-code-label-sm text-code-label-sm hover:border-primary-container hover:text-primary-container transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">
                filter_list
              </span>
              FILTER
            </button>
            <button
              type="button"
              className="flex items-center gap-2 border border-outline-variant bg-white px-stack-md py-stack-sm rounded-DEFAULT font-code-label-sm text-code-label-sm hover:border-primary-container hover:text-primary-container transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">sort</span>
              SORT
            </button>
          </div>
        </div>

        {/* Registry Table */}
        <div className="border border-outline-variant bg-white rounded-lg overflow-hidden relative">
          {/* Crosshairs for schematic aesthetic */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary-container"></div>
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary-container"></div>
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary-container"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary-container"></div>

          <div className="overflow-x-auto w-full">
            {count === 0 ? (
              <div className="p-stack-lg font-code-label-sm text-code-label-sm text-slate-data uppercase">
                No projects registered yet.
              </div>
            ) : (
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-outline-variant bg-surface-container-low font-code-label-sm text-code-label-sm text-slate-data uppercase tracking-wider">
                    <th className="p-stack-md whitespace-nowrap">ID</th>
                    <th className="p-stack-md">Image</th>
                    <th className="p-stack-md">System_Title</th>
                    <th className="p-stack-md">Category</th>
                    <th className="p-stack-md">Tech_Stack</th>
                    <th className="p-stack-md text-center">Status</th>
                    <th className="p-stack-md text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="font-body-md text-body-md divide-y divide-outline-variant">
                  {projects.map((p, i) => (
                    <tr key={p.slug} className="hover:bg-primary/5 transition-colors group">
                      <td className="p-stack-md font-code-label-sm text-code-label-sm text-slate-data whitespace-nowrap">
                        [SYS_{String(i + 1).padStart(2, "0")}]
                      </td>
                      <td className="p-stack-md">
                        <div className="w-16 h-11 relative overflow-hidden border border-grid-line bg-surface-container-high">
                          <SmartImage
                            src={p.image}
                            alt={p.imageAlt || p.name}
                            fill
                            sizes="64px"
                            wrapperClassName="h-full"
                            imageClassName="object-cover w-full h-full"
                          />
                        </div>
                      </td>
                      <td className="p-stack-md font-bold text-on-surface">
                        <Link href={`/products/${p.slug}`} className="hover:text-primary-container transition-colors">
                          {p.name}
                        </Link>
                      </td>
                      <td className="p-stack-md">{p.category}</td>
                      <td className="p-stack-md">
                        <div className="flex flex-wrap gap-stack-xs">
                          {p.tech.slice(0, 2).map((t) => (
                            <span
                              key={t}
                              className="border border-outline-variant px-2 py-0.5 text-[10px] font-code-label-sm text-on-surface-variant rounded-sm"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="p-stack-md text-center">
                        <span
                          className={`inline-flex items-center gap-1 px-2 py-1 text-[10px] font-code-label-sm rounded-sm uppercase ${
                            p.status === "LIVE"
                              ? "bg-[#14B8A6]/10 text-primary-container border border-primary-container/30"
                              : p.status === "DEV"
                              ? "bg-secondary/10 text-secondary border border-secondary/30"
                              : "bg-surface-container text-slate-data border border-grid-line"
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              p.status === "LIVE"
                                ? "bg-primary-container animate-pulse"
                                : "bg-slate-data"
                            }`}
                          ></span>
                          {p.status}
                        </span>
                      </td>
                      <td className="p-stack-md text-right whitespace-nowrap">
                        <Link
                          href={`/admin/products/${p.slug}/edit`}
                          className="text-slate-data hover:text-primary-container transition-colors p-1 inline-flex"
                          title="Edit"
                        >
                          <span className="material-symbols-outlined text-[18px]">edit</span>
                        </Link>
                        <DeleteProject slug={p.slug} name={p.name} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

        {/* Pagination (Schematic Style) */}
        <div className="flex items-center justify-between font-code-label-sm text-code-label-sm text-slate-data mt-stack-sm">
          <div>
            SHOWING: 01-{String(count).padStart(2, "0")} OF{" "}
            {String(count).padStart(2, "0")} ENTRIES
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              className="w-8 h-8 flex items-center justify-center border border-outline-variant rounded-DEFAULT hover:border-primary-container hover:text-primary-container transition-colors disabled:opacity-50"
              disabled
            >
              <span className="material-symbols-outlined text-[16px]">
                chevron_left
              </span>
            </button>
            <button
              type="button"
              className="w-8 h-8 flex items-center justify-center border border-primary-container bg-primary-container/5 text-primary-container rounded-DEFAULT"
            >
              1
            </button>
            <button
              type="button"
              className="w-8 h-8 flex items-center justify-center border border-outline-variant rounded-DEFAULT hover:border-primary-container hover:text-primary-container transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">
                chevron_right
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
