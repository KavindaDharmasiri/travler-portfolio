import InquiriesView from "../InquiriesView";
import { getInquiries } from "../../../lib/inquiries";

export const metadata = {
  title: "Contact Inbox | Admin",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function ContactInboxPage() {
  const items = await getInquiries("contact");
  return (
    <InquiriesView
      items={items}
      title="Contact Inbox"
      subtitle="Inquiries // contact form"
      emptyMessage="No contact inquiries received yet. Submissions through the contact form will appear here."
    />
  );
}
