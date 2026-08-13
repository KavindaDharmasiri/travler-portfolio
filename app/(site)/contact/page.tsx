import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import { getSettings } from "../../lib/seed";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch about your project.",
};

export default async function ContactPage() {
  const settings = await getSettings();
  const email = settings.contact_email || "info@travler.lk";
  const location = settings.location || "Colombo District, Sri Lanka";

  return (
    <main className="flex-1">
      <section className="page-hero">
        <div className="container">
          <span className="badge mb-4">Contact / Inquiry</span>
          <h1 className="display-lg">Let&apos;s talk.</h1>
          <p className="body-md text-secondary mt-4" style={{ maxWidth: "36rem" }}>
            Tell me what you&apos;re building. Form submissions are stored and
            tracked in the admin panel.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-12">
            <div style={{ gridColumn: "span 7" }}>
              <ContactForm />
            </div>

            <div style={{ gridColumn: "span 5" }}>
              <div className="card card-padded">
                <span className="card-coord">[INFO]</span>
                <span className="badge mb-4">Direct</span>
                <div className="body-sm mb-4">
                  <span className="code-label-sm text-muted">Email</span>
                  <br />
                  {email}
                </div>
                <div className="body-sm mb-4">
                  <span className="code-label-sm text-muted">Based in</span>
                  <br />
                  {location}
                </div>
                <div className="body-sm">
                  <span className="code-label-sm text-muted">Working hours</span>
                  <br />
                  Mon–Fri, 9:00–18:00 IST
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
