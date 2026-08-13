import type { Metadata } from "next";
import Reveal from "../../components/Reveal";
import SmartImage from "../../components/SmartImage";

export const metadata: Metadata = {
  title: "Expertise",
  description:
    "Domain expertise spanning critical financial infrastructure, high-volume commerce, and enterprise-grade operational architecture.",
};

const fintechPoints = [
  "Distributed Transaction Ledger",
  "ML-Driven Fraud Detection Engine",
  "PCI-DSS Compliant Infrastructure",
];

const commerceFeatures = [
  "Global CDN Routing",
  "Dynamic Loyalty Engine",
  "Microservices Cart Arch",
];

const govPoints = ["> Audit Trail Logging", "> RBAC Auth Matrix", "> FedRAMP readiness"];

const lifecycleSteps = [
  {
    code: "01 // Discovery & Architecture",
    desc: "System topology mapping, risk assessment, and technical blueprinting.",
  },
  {
    code: "02 // Core Development",
    desc: "Test-driven implementation with continuous security scanning.",
  },
  {
    code: "03 // Deployment & Scale",
    desc: "Infrastructure as code, zero-downtime CI/CD pipelines, and observability.",
  },
];

const fintechImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBS4E2MWUC1ivAA5I1E0xLoPnMVpifibMHe17wcrpig4VkEXaOfR8H9k9EgLAzLIz9Cnyy5aLF_3cFHO-fbTs632HIRoU1jZHLKK2wTg16ZN16hDGZ8xLc_YhyvzXB94aoSYXhffJLi-umGGp9dfk4kJd9yFz1BxIGHX5WatcSA_GKRXom1y7qCXtswAIsZezwSKk4bV1yxp8NYfAMe1bX6IVVR55EbffyGHvUewA4dbw17XGbHRiYu";

const govImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDfCID4zrjrJM4xtakGebjik31i7dJkr1xfqRsxx-r1B1mBStmLTydx-wkcyt77Djz-qRBFM0bimk7-gXydKu7JBeLgQxgRcpwYYo-MPfOknSrFbspEy9g18aBPcFhISES1-2jLIlDcRJpBat84jgNau_mUzBcQggcpGPT6Xgos2kitowZ58_rLZbiZr7X-8Oj1a7f9falGdqHf0dPvF0t6PsUHbZe1ALqbPUDXscu2UJ_Pb_nSWikB";

export default function ExpertisePage() {
  return (
    <main className="flex-grow container mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg max-w-[1440px]">
      {/* Header Section */}
      <Reveal>
        <header className="mb-margin-desktop">
          <h1 className="font-display-lg text-display-lg md:text-6xl text-on-surface mb-stack-md tech-crosshair tech-crosshair-tl pt-4 pl-4 font-bold">
            DOMAIN EXPERTISE
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl border-l-2 border-primary-container pl-4">
            We engineer resilient, high-performance systems for complex
            environments. Our expertise spans critical financial
            infrastructure, high-volume commerce, and enterprise-grade
            operational architecture.
          </p>
        </header>
      </Reveal>

      {/* Bento Grid Domains */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-margin-desktop">
        {/* Fintech */}
        <Reveal delay={100} className="md:col-span-8">
          <article className="h-full bg-surface-container-lowest schematic-border p-stack-lg relative hover:bg-primary-container/5 transition-colors group">
            <span className="absolute top-2 right-2 font-code-label-sm text-code-label-sm text-slate-data">
              [DOM_01]
            </span>
            <div className="flex items-center gap-2 mb-stack-md text-primary-container">
              <span className="material-symbols-outlined">account_balance</span>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase">
                Financial Technology
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              <div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-stack-md">
                  Architecture built for zero-downtime, high-frequency
                  transaction processing and real-time fraud mitigation.
                </p>
                <ul className="space-y-stack-sm">
                  {fintechPoints.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary-container text-sm">
                        check
                      </span>
                      <span className="font-code-label-sm text-code-label-sm text-on-surface">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="h-48 schematic-border bg-surface-background p-2 relative overflow-hidden">
                <SmartImage
                  src={fintechImage}
                  alt="A detailed blueprint style diagram illustrating a high frequency trading architecture with nodes connected by straight lines. The schematic is primarily white and light gray with crisp, thin technical borders and primary teal highlight paths indicating data flow."
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  wrapperClassName="h-full"
                  imageClassName="object-cover h-full w-full opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </article>
        </Reveal>

        {/* E-Commerce */}
        <Reveal delay={200} className="md:col-span-4">
          <article className="h-full flex flex-col bg-surface-container-lowest schematic-border p-stack-lg relative hover:bg-primary-container/5 transition-colors group">
            <span className="absolute top-2 right-2 font-code-label-sm text-code-label-sm text-slate-data">
              [DOM_02]
            </span>
            <div className="flex items-center gap-2 mb-stack-md text-primary-container">
              <span className="material-symbols-outlined">shopping_cart</span>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-xl">
                E-Commerce
              </h2>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-stack-md">
              Scalable storefronts engineered to handle severe traffic spikes
              and complex global inventory routing.
            </p>
            <div className="space-y-stack-sm mt-auto">
              {commerceFeatures.map((feature) => (
                <div
                  key={feature}
                  className="schematic-border p-2 bg-surface-container-high/20"
                >
                  <span className="font-code-label-sm text-code-label-sm text-on-surface block">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </article>
        </Reveal>

        {/* Gov & Enterprise */}
        <Reveal delay={300} className="md:col-span-12">
          <article className="bg-surface-container-lowest schematic-border p-stack-lg relative hover:bg-primary-container/5 transition-colors group">
            <span className="absolute top-2 left-2 font-code-label-sm text-code-label-sm text-slate-data">
              [DOM_03]
            </span>
            <div className="flex items-center gap-2 mb-stack-md text-primary-container justify-end">
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase">
                Gov &amp; Enterprise Systems
              </h2>
              <span className="material-symbols-outlined">corporate_fare</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mt-stack-md">
              <div className="schematic-border p-stack-md">
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-stack-sm">
                  Legacy system modernization and secure workflow automation for
                  heavily regulated environments.
                </p>
                <ul className="font-code-label-sm text-code-label-sm space-y-2 text-on-surface">
                  {govPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
              <div className="col-span-1 md:col-span-2 h-48 schematic-border bg-surface-background p-2 relative overflow-hidden">
                <SmartImage
                  src={govImage}
                  alt="A sharp, minimalist data visualization graphic representing a secure network topology for a government enterprise system. Thin gray lines connect geometric nodes on a pure white background. Select nodes are highlighted in solid teal."
                  fill
                  sizes="(max-width: 768px) 100vw, 66vw"
                  wrapperClassName="h-full"
                  imageClassName="object-cover h-full w-full opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </article>
        </Reveal>
      </section>

      {/* The Process Section */}
      <Reveal>
        <section className="mb-margin-desktop border-t border-grid-line pt-margin-desktop relative">
          <div className="tech-crosshair tech-crosshair-tl absolute top-0 left-0"></div>
          <h2 className="font-display-lg text-display-lg text-on-surface mb-stack-lg font-bold">
            ENGINEERING LIFECYCLE
          </h2>
          <div className="flex flex-col md:flex-row gap-gutter">
            {lifecycleSteps.map((step) => (
              <div
                key={step.code}
                className="flex-1 schematic-border p-stack-md bg-surface-background hover:border-primary-container transition-colors"
              >
                <div className="font-code-label-lg text-code-label-lg text-primary-container mb-stack-sm">
                  {step.code}
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>
    </main>
  );
}
