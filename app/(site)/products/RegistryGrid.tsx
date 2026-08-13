"use client";

import { useState } from "react";
import Link from "next/link";
import SmartImage from "../../components/SmartImage";
import { categories } from "../../lib/products";
import type { Project } from "../../lib/projects";

export default function RegistryGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState("All Systems");

  const filtered =
    active === "All Systems"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section className="px-margin-mobile md:px-margin-desktop py-stack-lg flex flex-col md:flex-row gap-margin-desktop">
      {/* Filter Sidebar (Desktop) / Top Bar (Mobile) */}
      <aside className="w-full md:w-64 flex-shrink-0">
        <div className="sticky top-[100px]">
          <div className="font-code-label-sm text-code-label-sm text-slate-data mb-stack-md uppercase border-b border-grid-line pb-2">
            System Taxonomy
          </div>
          <ul className="flex md:flex-col gap-stack-sm overflow-x-auto md:overflow-visible pb-4 md:pb-0 font-code-label-lg text-code-label-lg uppercase">
            {categories.map((c) => {
              const isActive = c === active;
              return (
                <li key={c}>
                  <button
                    type="button"
                    onClick={() => setActive(c)}
                    className={
                      "relative w-full text-left px-4 py-3 transition-all duration-300 " +
                      (isActive
                        ? "bg-surface-container-low text-primary-container font-bold"
                        : "text-on-surface-variant hover:text-primary-container hover:bg-surface-container-low")
                    }
                  >
                    <span
                      aria-hidden="true"
                      className={`absolute left-0 top-1/2 -translate-y-1/2 w-[3px] bg-primary-container transition-all duration-300 ${
                        isActive ? "h-6 opacity-100" : "h-0 opacity-0"
                      }`}
                    />
                    <span className="relative inline-flex items-center gap-2">
                      {c}
                      <span
                        aria-hidden="true"
                        className={`inline-block transition-all duration-300 ${
                          isActive
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-2"
                        }`}
                      >
                        ▸
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>

      {/* Grid Content */}
      <div
        key={active}
        className="flex-grow grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-gutter"
      >
        {filtered.map((p, i) => (
          <Link
            key={p.slug}
            href={`/products/${p.slug}`}
            style={{ animationDelay: `${i * 60}ms` }}
            className="taxonomy-card lift-hover bg-surface-background border border-grid-line hover:border-primary-container hover:bg-surface-container-lowest group flex flex-col"
          >
            <div className="p-4 border-b border-grid-line flex justify-between items-center bg-surface-container-low group-hover:bg-primary-container/5 transition-colors">
              <span className="font-code-label-sm text-code-label-sm text-slate-data group-hover:text-primary-container transition-colors">
                [SYS.{String(i + 1).padStart(2, "0")}]
              </span>
              <div className="flex items-center gap-2 bg-surface-background border border-grid-line px-2 py-1">
                <span className="w-2 h-2 rounded-full bg-secondary pulse-soft"></span>
                <span className="font-code-label-sm text-code-label-sm text-secondary">
                  LIVE
                </span>
              </div>
            </div>
            <div className="h-48 border-b border-grid-line relative overflow-hidden bg-surface-container-high">
              <SmartImage
                src={p.image}
                alt={p.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 33vw"
                wrapperClassName="h-full"
                imageClassName="object-cover w-full h-full opacity-80 group-hover:opacity-100 mix-blend-multiply img-zoom"
              />
              <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 px-3 py-1.5 bg-primary-container text-white font-code-label-sm text-code-label-sm uppercase tracking-wider opacity-0 -translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                Open Case Study
                <span className="material-symbols-outlined text-[14px]">
                  arrow_outward
                </span>
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-2 group-hover:text-primary-container transition-colors">
                {p.name}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-stack-md flex-grow">
                {p.blurb}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="font-code-label-sm text-code-label-sm px-2 py-1 border border-grid-line text-slate-data bg-surface-container-lowest transition-colors group-hover:border-primary-container/30"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
