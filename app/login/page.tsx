import type { Metadata } from "next";
import LoginForm from "./LoginForm";

export const metadata: Metadata = {
  title: "Admin Login | SYS.AUTH.01",
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return (
    <>
      {/* Top Left Coordinate Anchor */}
      <div className="absolute top-margin-desktop left-margin-desktop hidden md:flex font-code-label-sm text-code-label-sm text-slate-data z-10">
        [SYS_COORD_00:00]
      </div>

      {/* Main Content Canvas */}
      <main className="flex-grow flex items-center justify-center relative z-10 p-margin-mobile md:p-margin-desktop">
        {/* Login Card / Schematic Module */}
        <div className="w-full max-w-md bg-surface-background border border-grid-line p-8 relative">
          {/* Corner Accents (Crosshairs) */}
          <div className="absolute -top-[5px] -left-[5px] w-2 h-2 border-t-2 border-l-2 border-primary"></div>
          <div className="absolute -top-[5px] -right-[5px] w-2 h-2 border-t-2 border-r-2 border-primary"></div>
          <div className="absolute -bottom-[5px] -left-[5px] w-2 h-2 border-b-2 border-l-2 border-primary"></div>
          <div className="absolute -bottom-[5px] -right-[5px] w-2 h-2 border-b-2 border-r-2 border-primary"></div>

          {/* Header Section */}
          <div className="mb-stack-lg border-b border-grid-line pb-stack-md flex justify-between items-end">
            <div>
              <h1 className="font-display-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tight uppercase font-bold">
                TRAVLER
              </h1>
              <p className="font-code-label-sm text-code-label-sm text-slate-data mt-stack-xs">
                AUTH_MODULE
              </p>
            </div>
            <div className="font-code-label-sm text-code-label-sm text-primary-container bg-surface px-2 py-1 border border-primary-container">
              SYS.AUTH.01
            </div>
          </div>

          {/* Form Section */}
          <LoginForm />

          {/* Module Bottom Coordinate */}
          <div className="absolute bottom-2 right-2 font-code-label-sm text-[10px] text-grid-line pointer-events-none">
            [MOD_AUTH_END]
          </div>
        </div>
      </main>

      {/* Global Footer Status Bar */}
      <footer className="w-full border-t border-grid-line bg-surface-container-lowest py-3 px-margin-mobile md:px-margin-desktop flex justify-between items-center z-10 relative">
        <div className="flex items-center gap-3">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#14B8A6] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#14B8A6]"></span>
          </span>
          <span className="font-code-label-sm text-code-label-sm text-on-surface-variant">
            STATUS: AWAITING_INPUT
          </span>
        </div>
        <div className="font-code-label-sm text-code-label-sm text-slate-data">
          TRAVLER SYS v2.4.1
        </div>
      </footer>
    </>
  );
}
