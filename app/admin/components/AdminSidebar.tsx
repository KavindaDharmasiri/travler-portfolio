"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { logoutAction } from "../../actions/auth";

const links = [
  { href: "/admin/dashboard", label: "Overview", icon: "dashboard" },
  { href: "/admin/products", label: "Projects", icon: "folder_open" },
  { href: "/admin/inquiries/contact", label: "Contact", icon: "mail" },
  { href: "/admin/inquiries/consultation", label: "Consultation", icon: "video_call" },
  { href: "/admin/settings", label: "Settings", icon: "settings" },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="h-screen w-64 fixed left-0 top-0 flex flex-col border-r border-grid-line bg-surface-container-low z-50">
      {/* Header */}
      <div className="px-gutter py-stack-lg border-b border-grid-line flex flex-col items-start gap-stack-sm">
        <div className="flex items-center gap-stack-sm w-full">
          <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-code-label-sm">
            AD
          </div>
          <div>
            <h1 className="font-headline-lg text-headline-lg text-primary leading-none font-bold">
              ADMIN_PANEL
            </h1>
            <p className="font-code-label-sm text-code-label-sm uppercase text-on-surface-variant mt-1">
              [CORE_SYSTEM]
            </p>
          </div>
        </div>
        <Link
          href="/admin/products/new"
          className="btn-glow btn-shine mt-stack-md w-full bg-primary-container text-on-primary-container font-code-label-lg text-code-label-lg uppercase tracking-wider py-2 px-4 rounded-DEFAULT flex items-center justify-center gap-2 border border-primary-container"
        >
          <span className="material-symbols-outlined text-[18px]">add</span>
          NEW_PROJECT
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 overflow-y-auto py-stack-md">
        {links.map((l) => {
          const active = pathname === l.href;
          return (
            <Link
              key={l.href}
              href={l.href}
              className={`group flex items-center gap-stack-sm px-gutter py-stack-md cursor-pointer font-code-label-sm text-code-label-sm uppercase transition-all active:translate-x-0.5 ${
                active
                  ? "bg-primary text-on-primary font-bold border-l-4 border-primary-fixed-dim"
                  : "text-on-surface-variant hover:bg-primary-container hover:text-on-primary-container"
              }`}
            >
              <span
                className="material-symbols-outlined transition-transform group-hover:scale-110"
                style={active ? { fontVariationSettings: "'FILL' 1" } : undefined}
              >
                {l.icon}
              </span>
              {l.label}
            </Link>
          );
        })}
      </nav>

      {/* Footer Links */}
      <div className="border-t border-grid-line py-stack-sm">
        <form action={logoutAction}>
          <button
            type="submit"
            className="group w-full flex items-center gap-stack-sm px-gutter py-stack-md cursor-pointer font-code-label-sm text-code-label-sm uppercase text-on-surface-variant hover:bg-primary-container hover:text-on-primary-container transition-all text-left active:translate-x-0.5"
          >
            <span className="material-symbols-outlined transition-transform group-hover:scale-110">
              logout
            </span>
            Logout
          </button>
        </form>
      </div>
    </aside>
  );
}
