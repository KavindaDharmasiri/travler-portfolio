import type { Metadata } from "next";
import Reveal from "../../components/Reveal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Backend, full-stack, and enterprise development services. Core capabilities engineered for scale and operational precision.",
};

const stackSpecs = [
  { label: "Lang", value: "Java 17+" },
  { label: "Framework", value: "Spring Boot" },
  { label: "Data", value: "PostgreSQL" },
  { label: "Message", value: "Kafka" },
];

const frontendStack = [
  "React & Next.js",
  "Angular Ecosystem",
  "Tailwind CSS & Design Systems",
];

const enterpriseTags = ["Workflow Automation", "Fintech", "Gov-tech"];

export default function ServicesPage() {
  return (
    <main className="flex-grow px-margin-mobile md:px-margin-desktop py-stack-lg max-w-7xl mx-auto w-full">
      {/* Header Section */}
      <Reveal>
        <section className="mb-stack-lg border-b border-grid-line pb-stack-lg">
          <div className="font-code-label-sm text-code-label-sm text-slate-data mb-stack-sm">
            [MOD_SVC]
          </div>
          <h1 className="font-display-lg text-display-lg text-on-surface mb-stack-md">
            Core Capabilities
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
            We engineer scalable, high-performance software systems for
            enterprise partners. Our approach combines rigorous technical
            architecture with modern, high-fidelity interfaces.
          </p>
        </section>
      </Reveal>

      {/* Services Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* Service 1: Backend */}
        <Reveal delay={100} className="md:col-span-12 lg:col-span-8">
          <div className="bg-surface-background border border-grid-line p-stack-lg relative overflow-hidden group hover:border-primary-container transition-colors h-full">
            <div className="absolute top-0 right-0 p-stack-sm font-code-label-sm text-code-label-sm text-slate-data">
              [API_CORE]
            </div>
            <div className="mb-stack-md">
              <span className="material-symbols-outlined text-4xl text-primary-container group-hover:scale-110 transition-transform inline-block">
                hub
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg mb-stack-sm">
              Backend &amp; API Development
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-stack-lg max-w-xl">
              Robust, scalable server-side architectures built for
              high-throughput environments. We specialize in microservices and
              robust API gateways that form the critical infrastructure of
              enterprise applications.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-stack-sm">
              {stackSpecs.map((s) => (
                <div
                  key={s.label}
                  className="border border-grid-line p-stack-sm bg-surface-container-low"
                >
                  <span className="font-code-label-sm text-code-label-sm block mb-stack-xs text-on-surface-variant">
                    {s.label}
                  </span>
                  <span className="font-body-sm text-body-sm font-semibold">
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Service 2: Frontend */}
        <Reveal delay={200} className="md:col-span-12 lg:col-span-4">
          <div className="bg-surface-background border border-grid-line p-stack-lg relative overflow-hidden group hover:border-primary-container transition-colors h-full">
            <div className="absolute top-0 right-0 p-stack-sm font-code-label-sm text-code-label-sm text-slate-data">
              [UI_SYS]
            </div>
            <div className="mb-stack-md">
              <span className="material-symbols-outlined text-4xl text-primary-container group-hover:scale-110 transition-transform inline-block">
                web
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-stack-sm">
              Full-Stack Web Platforms
            </h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-stack-lg">
              High-fidelity interfaces backed by robust frontend architectures.
              We build responsive, accessible, and performant web applications
              that deliver complex data with clarity.
            </p>
            <div className="flex flex-col gap-stack-sm">
              {frontendStack.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-stack-sm border-b border-grid-line pb-stack-sm"
                >
                  <span className="material-symbols-outlined text-sm text-primary-container">
                    check_circle
                  </span>
                  <span className="font-code-label-sm text-code-label-sm">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Service 3: Enterprise */}
        <Reveal delay={300} className="md:col-span-12">
          <div className="bg-surface-background border border-grid-line p-stack-lg relative overflow-hidden group hover:border-primary-container transition-colors flex flex-col md:flex-row gap-gutter items-center">
            <div className="flex-1">
              <div className="font-code-label-sm text-code-label-sm text-slate-data mb-stack-sm">
                [ENT_SYS]
              </div>
              <h2 className="font-headline-lg text-headline-lg mb-stack-sm">
                Enterprise Systems
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-stack-md">
                Mission-critical systems for highly regulated environments. From
                complex fintech transaction engines to secure gov-tech
                workflows, we build software that requires uncompromised
                security and auditability.
              </p>
              <div className="flex flex-wrap gap-stack-sm">
                {enterpriseTags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-surface-container-low border border-grid-line px-stack-sm py-stack-xs font-code-label-sm text-code-label-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/3 aspect-video bg-surface-container-high border border-grid-line flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <span className="material-symbols-outlined text-8xl">
                  account_tree
                </span>
              </div>
              <div className="font-code-label-sm text-code-label-sm text-primary-container z-10">
                [DIAGRAM_SYS_ARCH]
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
