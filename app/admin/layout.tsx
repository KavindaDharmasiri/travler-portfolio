import { redirect } from "next/navigation";
import AdminSidebar from "./components/AdminSidebar";
import { getSessionUser } from "../lib/auth";
import { ensureSeeded } from "../lib/seed";

export const dynamic = "force-dynamic";

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getSessionUser();
  if (!user) redirect("/login");

  try {
    await ensureSeeded();
  } catch {
    // Tables may be unreachable; individual pages will surface errors.
  }

  return (
    <>
      <AdminSidebar />
      <main className="ml-64 flex-1 flex flex-col min-h-screen relative">
        {/* Schematic background lines (Desktop only) */}
        <div className="hidden md:flex absolute inset-0 pointer-events-none z-0 justify-evenly">
          <div className="w-[1px] h-full bg-grid-line/50"></div>
          <div className="w-[1px] h-full bg-grid-line/50"></div>
          <div className="w-[1px] h-full bg-grid-line/50"></div>
          <div className="w-[1px] h-full bg-grid-line/50"></div>
          <div className="w-[1px] h-full bg-grid-line/50"></div>
        </div>
        <div className="flex-1 px-margin-mobile md:px-margin-desktop py-stack-lg relative z-10 w-full max-w-[1440px] mx-auto">
          {children}
        </div>
      </main>
    </>
  );
}
