import type { Metadata } from "next";
import RegistryGrid from "./RegistryGrid";
import { loadProjects } from "../../lib/projects";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "A curated technical index of deployed architectures — enterprise-grade software engineered for scale.",
};

export const dynamic = "force-dynamic";

export default async function ProductsPage() {
  const projects = await loadProjects();

  return (
    <>
      {/* Main Content Canvas */}
      <main className="flex-grow w-full max-w-[1440px] mx-auto bg-schematic-grid">
        {/* Header Section */}
        <header className="px-margin-mobile md:px-margin-desktop py-margin-desktop border-b border-grid-line bg-surface-background">
          <div className="max-w-4xl">
            <div className="font-code-label-sm text-code-label-sm text-slate-data mb-stack-md tracking-widest uppercase">
              [DIR_01] / Catalog
            </div>
            <h1 className="font-display-lg text-display-lg text-on-surface mb-stack-lg">
              Project Registry{" "}
              <span className="text-primary-container font-normal">
                {"//"}
              </span>{" "}
              Shipped Systems
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl border-l-2 border-primary-container pl-4">
              A curated technical index of deployed architectures. Documentation
              of enterprise-grade software solutions engineered for scale,
              resilience, and operational precision.
            </p>
          </div>
        </header>

        <RegistryGrid projects={projects} />
      </main>
    </>
  );
}
