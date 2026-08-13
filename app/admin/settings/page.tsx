import SettingsForm from "./SettingsForm";
import { getSettings } from "../../lib/seed";

export const metadata = {
  title: "Settings | Admin",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function AdminSettingsPage() {
  const settings = await getSettings();

  return <SettingsForm initial={settings} />;
}
