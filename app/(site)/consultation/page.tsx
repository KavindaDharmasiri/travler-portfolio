import type { Metadata } from "next";
import Reveal from "../../components/Reveal";
import SmartImage from "../../components/SmartImage";
import ConsultationForm from "./ConsultationForm";

export const metadata: Metadata = {
  title: "Initialize Consultation",
  description:
    "Establish an encrypted communication link to outline project vectors. Evaluate technical specifications and coordinate deployment strategies.",
};

const nodeDetails = [
  {
    icon: "mail",
    label: "Electronic Mail",
    value: "info@travler.lk",
  },
  {
    icon: "call",
    label: "Voice Protocol",
    value: "076 883 1973",
  },
  {
    icon: "location_on",
    label: "Physical Coordinates",
    value: (
      <>
        Colombo District
        <br />
        Sri Lanka
      </>
    ),
  },
];

export default function ConsultationPage() {
  return (
    <main className="flex-grow flex flex-col px-margin-mobile md:px-margin-desktop py-margin-desktop gap-margin-desktop relative z-10 max-w-7xl mx-auto w-full">
      {/* Hero Section */}
      <Reveal>
        <section className="border-l-4 border-primary-container pl-gutter">
          <h1 className="font-display-lg text-display-lg font-bold text-on-surface mb-stack-sm">
            Initialize Project Sequencing
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
            Establish an encrypted communication link to outline project
            vectors. Our engineering team is standing by to evaluate technical
            specifications and coordinate deployment strategies.
          </p>
        </section>
      </Reveal>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
        {/* Intake Form (Main Area) */}
        <Reveal delay={100} className="md:col-span-8">
          <div className="bg-surface-container-lowest border border-grid-line p-stack-lg relative group transition-colors duration-300 hover:border-outline-variant">
            <div className="absolute top-0 right-0 p-stack-xs border-b border-l border-grid-line bg-surface-container-lowest font-code-label-sm text-code-label-sm text-slate-data">
              [FORM_SEQ_01]
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-stack-lg border-b border-grid-line pb-stack-sm">
              Input Parameters
            </h2>
            <ConsultationForm />
          </div>
        </Reveal>

        {/* Sidebar / Node Details */}
        <div className="md:col-span-4 flex flex-col gap-gutter">
          {/* Contact Info Card */}
          <Reveal delay={200}>
            <div className="bg-surface-container-lowest border border-grid-line p-stack-md relative group transition-colors duration-300 hover:border-outline-variant">
              <div className="absolute top-0 right-0 p-stack-xs border-b border-l border-grid-line bg-surface-container-lowest font-code-label-sm text-code-label-sm text-slate-data">
                [NODE_01]
              </div>
              <h3 className="font-code-label-lg text-code-label-lg uppercase text-on-surface-variant border-b border-grid-line pb-stack-xs mb-stack-md flex items-center gap-stack-xs">
                <span className="material-symbols-outlined text-primary-container">
                  dns
                </span>
                Node Details
              </h3>
              <ul className="space-y-stack-sm font-code-label-sm text-code-label-sm text-on-surface">
                {nodeDetails.map((d) => (
                  <li key={d.icon} className="flex items-start gap-stack-sm">
                    <span className="material-symbols-outlined text-slate-data text-[16px]">
                      {d.icon}
                    </span>
                    <div>
                      <span className="text-slate-data block mb-1">
                        {d.label}
                      </span>
                      {d.value}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Schematic Visual / Map Area */}
          <Reveal delay={300}>
            <div className="bg-surface-container-lowest border border-grid-line p-stack-xs relative overflow-hidden h-64 group">
              <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
                <span className="material-symbols-outlined text-[120px] text-primary-container">
                  public
                </span>
              </div>
              <SmartImage
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeOi0iUcDdPYzOrWQNT1wX-DJnYT_euzqctxxl_TC6bAnhgMPzPujxhMuPmxemD-NTy-CFDfT9cVx_59CvfsrEQRTvYYSRZw_6BpFvO1kmML3PV7Q7-9TqfnOj13_obwOyUb1L2C2jSOH4GMpntocfy97u1NG4wEvSusZY0DjEq1u13lzHM0Lh50S9wX6imtiMpiekc2XE683m6Q0e13NWpgHsq_0htzg6zkPtCoOTBNLM7Ma5Se7V"
                alt="A highly technical, monochromatic architectural blueprint map of the Colombo District in Sri Lanka. The visual style is schematic, using clean lines, grids, and precise geometry over a white background with subtle teal highlights indicating structural nodes."
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                wrapperClassName="h-full"
                imageClassName="object-cover w-full h-full grayscale opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary-container m-2"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary-container m-2"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary-container m-2"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary-container m-2"></div>
            </div>
          </Reveal>
        </div>
      </div>
    </main>
  );
}
