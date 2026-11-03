import AccountForm from "./AccountForm";

export const metadata = {
  title: "Account | Admin",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function AccountPage() {
  return <AccountForm />;
}
