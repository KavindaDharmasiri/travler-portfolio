import TopNavBar from "../components/TopNavBar";
import SiteFooter from "../components/SiteFooter";
import PageTransition from "../components/PageTransition";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <TopNavBar />
      <PageTransition>{children}</PageTransition>
      <SiteFooter />
    </>
  );
}
