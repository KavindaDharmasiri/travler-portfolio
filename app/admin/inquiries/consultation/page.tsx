import InquiriesView from "../InquiriesView";
import { getInquiries } from "../../../lib/inquiries";

export const metadata = {
  title: "Consultation Inbox | Admin",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function ConsultationInboxPage() {
  const items = await getInquiries("consultation");
  return (
    <InquiriesView
      items={items}
      title="Consultation Inbox"
      subtitle="Payloads // consultation requests"
      emptyMessage="No consultation requests received yet. Submissions through the consultation form will appear here."
    />
  );
}
