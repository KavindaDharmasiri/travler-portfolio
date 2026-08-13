import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="w-full py-stack-lg px-margin-desktop bg-surface-background border-t border-grid-line mt-auto z-10 relative">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-full w-full">
        <Link href="/" className="flex items-center mb-4 md:mb-0">
          <Image
            src="/assets/traveler_logo.png"
            alt="Travler"
            width={500}
            height={500}
            className="h-12 w-auto"
          />
        </Link>
        <div className="flex flex-col items-center md:items-end gap-stack-sm">
          <div className="flex gap-4">
            <a
              className="font-code-label-sm text-code-label-sm uppercase tracking-tighter text-on-surface-variant hover:text-secondary transition-opacity"
              href="#"
            >
              Github
            </a>
            <a
              className="font-code-label-sm text-code-label-sm uppercase tracking-tighter text-on-surface-variant hover:text-secondary transition-opacity"
              href="#"
            >
              LinkedIn
            </a>
            <span className="font-code-label-sm text-code-label-sm uppercase tracking-tighter text-primary">
              Engineered for performance
            </span>
          </div>
          <div className="font-code-label-sm text-code-label-sm uppercase tracking-tighter text-on-surface-variant mt-2 md:mt-0">
            © {new Date().getFullYear()} Travler Solutions. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
