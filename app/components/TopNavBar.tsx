"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/products", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "Expertise" },
];

export default function TopNavBar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);

  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    pathname === href || (href === "/products" && pathname.startsWith("/products"));

  return (
    <header
      className={`w-full top-0 sticky z-50 bg-surface-background/90 backdrop-blur-md border-b border-grid-line px-margin-mobile md:px-margin-desktop py-stack-md flex justify-between items-center transition-shadow duration-300 ${
        scrolled ? "shadow-[0_8px_30px_-12px_rgba(15,118,110,0.25)]" : ""
      }`}
    >
      <Link href="/" className="flex items-center gap-2 group" onClick={() => setOpen(false)}>
        <Image
          src="/assets/traveler_logo.png"
          alt="Travler"
          width={500}
          height={500}
          className="h-12 w-auto transition-transform duration-300 group-hover:scale-[1.03]"
          priority
        />
      </Link>

      <nav className="hidden md:flex gap-stack-lg items-center">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={`nav-link font-code-label-lg text-code-label-lg tracking-wider pb-1 ${
              isActive(l.href)
                ? "is-active text-primary font-bold"
                : "text-on-surface-variant hover:text-primary"
            }`}
          >
            {l.label}
          </Link>
        ))}
      </nav>

      <div className="hidden md:block">
        <Link
          href="/contact"
          className="btn-glow btn-shine inline-block bg-primary-container text-on-tertiary font-code-label-lg px-6 py-2 uppercase tracking-wider border border-primary-container"
        >
          Hire Us
        </Link>
      </div>

      {/* Mobile toggle */}
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="md:hidden flex items-center justify-center w-10 h-10 border border-grid-line text-primary-container transition-colors hover:border-primary-container"
      >
        <span className="material-symbols-outlined">
          {open ? "close" : "menu"}
        </span>
      </button>

      {/* Mobile menu */}
      <div
        className={`mobile-menu md:hidden absolute top-full left-0 right-0 bg-surface-background/95 backdrop-blur-md border-b border-grid-line px-margin-mobile ${
          open ? "mobile-menu-open" : ""
        }`}
      >
        <div className="flex flex-col py-stack-md gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link py-3 px-2 font-code-label-lg text-code-label-lg tracking-wider ${
                isActive(l.href)
                  ? "is-active text-primary font-bold"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-glow mt-stack-sm inline-flex items-center justify-center bg-primary-container text-on-tertiary font-code-label-lg px-6 py-3 uppercase tracking-wider border border-primary-container"
          >
            Hire Us
          </Link>
        </div>
      </div>
    </header>
  );
}
