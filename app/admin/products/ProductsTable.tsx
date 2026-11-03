"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import SmartImage from "../../components/SmartImage";
import DeleteProject from "./DeleteProject";
import type { Project } from "../../lib/projects";

const PAGE_SIZE = 8;

export default function ProductsTable({ projects }: { projects: Project[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");
  const [sort, setSort] = useState("name-asc");
  const [page, setPage] = useState(1);

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.category))).sort()],
    [projects]
  );
  const statuses = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.status))).sort()],
    [projects]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let rows = projects.filter((p) => {
      if (category !== "All" && p.category !== category) return false;
      if (status !== "All" && p.status !== status) return false;
      if (!q) return true;
      return (
        p.name.toLowerCase().includes(q) ||
        p.slug.toLowerCase().includes(q) ||
        p.tech.join(" ").toLowerCase().includes(q)
      );
    });

    rows = [...rows].sort((a, b) => {
      switch (sort) {
        case "name-desc":
          return b.name.localeCompare(a.name);
        case "status":
          return a.status.localeCompare(b.status);
        case "category":
          return a.category.localeCompare(b.category);
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return rows;
  }, [projects, query, category, status, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * PAGE_SIZE;
  const pageRows = filtered.slice(start, start + PAGE_SIZE);

  return (
    <>
      <div className="flex flex-col md:flex-row gap-gutter items-center justify-between mb-stack-lg">
        <div className="relative w-full md:w-96">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-data">
            search
          </span>
          <input
            className="w-full bg-white/70 backdrop-blur border border-white/60 focus:border-primary-container focus:ring-1 focus:ring-primary-container rounded-DEFAULT py-stack-sm pl-10 pr-4 font-code-label-lg text-code-label-lg placeholder-slate-data text-on-surface transition-all"
            placeholder="SEARCH_PROJECTS..."
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
          />
        </div>
        <div className="flex gap-stack-sm w-full md:w-auto flex-wrap">
          <select
            className="border border-white/60 bg-white/70 backdrop-blur px-stack-md py-stack-sm rounded-DEFAULT font-code-label-sm text-code-label-sm"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setPage(1);
            }}
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <select
            className="border border-white/60 bg-white/70 backdrop-blur px-stack-md py-stack-sm rounded-DEFAULT font-code-label-sm text-code-label-sm"
            value={status}
            onChange={(e) => {
              setStatus(e.target.value);
              setPage(1);
            }}
          >
            {statuses.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <select
            className="border border-white/60 bg-white/70 backdrop-blur px-stack-md py-stack-sm rounded-DEFAULT font-code-label-sm text-code-label-sm"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="name-asc">Name A-Z</option>
            <option value="name-desc">Name Z-A</option>
            <option value="status">Status</option>
            <option value="category">Category</option>
          </select>
        </div>
      </div>

      <div className="border border-white/60 bg-white/70 backdrop-blur rounded-lg overflow-hidden relative">
        <div className="overflow-x-auto w-full">
          {pageRows.length === 0 ? (
            <div className="p-stack-lg font-code-label-sm text-code-label-sm text-slate-data uppercase">
              No projects match.
            </div>
          ) : (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/60 bg-white/50 font-code-label-sm text-code-label-sm text-slate-data uppercase tracking-wider">
                  <th className="p-stack-md whitespace-nowrap">ID</th>
                  <th className="p-stack-md">Image</th>
                  <th className="p-stack-md">System_Title</th>
                  <th className="p-stack-md">Category</th>
                  <th className="p-stack-md">Tech_Stack</th>
                  <th className="p-stack-md text-center">Status</th>
                  <th className="p-stack-md text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="font-body-md text-body-md divide-y divide-white/60">
                {pageRows.map((p, i) => (
                  <tr
                    key={p.slug}
                    className="hover:bg-primary/5 transition-colors group"
                  >
                    <td className="p-stack-md font-code-label-sm text-code-label-sm text-slate-data whitespace-nowrap">
                      [SYS_{String(start + i + 1).padStart(2, "0")}]
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
                      <Link
                        href={`/products/${p.slug}`}
                        className="hover:text-primary-container transition-colors"
                      >
                        {p.name}
                      </Link>
                    </td>
                    <td className="p-stack-md">{p.category}</td>
                    <td className="p-stack-md">
                      <div className="flex flex-wrap gap-stack-xs">
                        {p.tech.slice(0, 2).map((t) => (
                          <span
                            key={t}
                            className="border border-white/60 px-2 py-0.5 text-[10px] font-code-label-sm text-on-surface-variant rounded-sm"
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
                        <span className="material-symbols-outlined text-[18px]">
                          edit
                        </span>
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

      <div className="flex items-center justify-between font-code-label-sm text-code-label-sm text-slate-data mt-stack-sm">
        <div>
          SHOWING: {String(start + 1).padStart(2, "0")}-
          {String(Math.min(start + PAGE_SIZE, filtered.length)).padStart(2, "0")}{" "}
          OF {String(filtered.length).padStart(2, "0")} ENTRIES
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            className="w-8 h-8 flex items-center justify-center border border-white/60 rounded-DEFAULT hover:border-primary-container hover:text-primary-container transition-colors disabled:opacity-50"
            disabled={currentPage <= 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
          >
            <span className="material-symbols-outlined text-[16px]">
              chevron_left
            </span>
          </button>
          <button
            type="button"
            className="w-8 h-8 flex items-center justify-center border border-primary-container bg-primary-container/5 text-primary-container rounded-DEFAULT"
          >
            {currentPage}
          </button>
          <button
            type="button"
            className="w-8 h-8 flex items-center justify-center border border-white/60 rounded-DEFAULT hover:border-primary-container hover:text-primary-container transition-colors disabled:opacity-50"
            disabled={currentPage >= totalPages}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          >
            <span className="material-symbols-outlined text-[16px]">
              chevron_right
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
