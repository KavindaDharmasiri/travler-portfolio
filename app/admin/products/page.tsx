import Link from "next/link";
import { loadProjects } from "../../lib/projects";
import ProductsTable from "./ProductsTable";

export const metadata = {
  title: "Project Registry | Admin",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function AdminProductsPage() {
  const projects = await loadProjects();

  return (
    <>
      <header className="-mx-margin-mobile md:-mx-margin-desktop px-margin-mobile md:px-margin-desktop py-stack-lg border-b border-grid-line bg-surface-background/80 backdrop-blur-sm sticky top-0 z-40 flex items-center justify-between">
        <div>
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-stack-xs font-bold">
            Project Registry
          </h1>
          <p className="font-code-label-sm text-code-label-sm text-slate-data uppercase">
            Overview // {projects.length} Active Systems Detected
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

      <div className="py-stack-lg flex flex-col gap-stack-lg">
        <ProductsTable projects={projects} />
      </div>
    </>
  );
}
