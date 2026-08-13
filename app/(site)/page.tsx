import Link from "next/link";
import TypingLabel from "../components/TypingLabel";
import SmartImage from "../components/SmartImage";
import Reveal from "../components/Reveal";

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="px-margin-desktop py-24 md:py-32 border-b border-grid-line">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-8 flex flex-col justify-center">
            <Reveal>
              <TypingLabel
                text="[SYS_INIT: PORTFOLIO_VIEW]"
                className="font-code-label-sm text-primary mb-stack-md uppercase"
              />
            </Reveal>
            <Reveal delay={100}>
              <h1 className="font-display-lg text-display-lg text-on-surface mb-stack-md">
                Engineered Digital Architecture.
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="font-body-md text-on-surface-variant max-w-2xl mb-stack-lg border-l-2 border-primary-container pl-stack-md">
                Building structural, high-performance interfaces for fintech,
                government, and retail. Precision-engineered solutions designed
                for scale and reliability.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="flex gap-stack-md">
                <Link
                  href="/products"
                  className="btn-glow btn-shine bg-primary-container text-on-tertiary font-code-label-lg px-6 py-3 uppercase tracking-wider border border-primary-container"
                >
                  View Schematics
                </Link>
                <Link
                  href="/services"
                  className="bg-transparent text-primary-container font-code-label-lg px-6 py-3 uppercase tracking-wider hover:bg-primary-container/5 hover:border-primary transition-colors border border-primary-container"
                >
                  System Docs
                </Link>
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-4 mt-stack-lg md:mt-0 relative aspect-square bg-surface-container-low border border-grid-line p-stack-md flex items-center justify-center overflow-hidden scan-sweep">
            <div className="absolute top-2 left-2 font-code-label-sm text-slate-data">
              [DIAG_01]
            </div>
            <div className="absolute bottom-2 right-2 font-code-label-sm text-slate-data">
              REQ_FLOW
            </div>
            {/* Abstract schematic visualization placeholder */}
            <div className="w-full h-full marching-ants opacity-30 relative">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMwRjc2NkUiIGZpbGwtb3BhY2l0eT0iMC41Ii8+PC9zdmc+')] opacity-50"></div>
              <div className="absolute top-1/2 left-0 w-full h-px bg-primary-container/60"></div>
              <div className="absolute left-1/2 top-0 w-px h-full bg-primary-container/60"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-2 border-primary-container bg-surface-background z-10 flex items-center justify-center float-y">
                <span className="material-symbols-outlined text-primary-container pulse-soft">
                  account_tree
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities Bento */}
      <section className="px-margin-desktop py-24 border-b border-grid-line bg-surface-container-lowest">
        <div className="mb-stack-lg flex justify-between items-end border-b border-grid-line pb-stack-sm">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            Core Capabilities
          </h2>
          <span className="font-code-label-sm text-slate-data">
            [MOD_CAPABILITIES]
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {[
            {
              code: "[API_01]",
              icon: "terminal",
              title: "Backend & API",
              desc: "Robust, scalable server-side architectures designed for high-throughput enterprise environments.",
            },
            {
              code: "[FS_02]",
              icon: "layers",
              title: "Full-Stack Platforms",
              desc: "End-to-end engineered solutions integrating precision front-ends with resilient data layers.",
            },
            {
              code: "[ENT_03]",
              icon: "domain",
              title: "Enterprise Systems",
              desc: "Mission-critical infrastructure for government and financial institutions requiring zero downtime.",
            },
          ].map((cap, i) => (
            <Reveal key={cap.code} delay={i * 120}>
              <div className="lift-hover border border-grid-line p-stack-lg bg-surface-background hover:border-primary-container group relative h-64 flex flex-col justify-between">
                <div className="absolute top-2 right-2 font-code-label-sm text-slate-data">
                  {cap.code}
                </div>
                <span className="material-symbols-outlined text-primary-container text-4xl mb-stack-md group-hover:scale-110 transition-transform">
                  {cap.icon}
                </span>
                <div>
                  <h3 className="font-code-label-lg font-bold mb-stack-xs uppercase text-on-surface">
                    {cap.title}
                  </h3>
                  <p className="font-body-sm text-on-surface-variant">
                    {cap.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured Project */}
      <section className="px-margin-desktop py-24 border-b border-grid-line">
        <div className="mb-stack-lg flex justify-between items-end border-b border-grid-line pb-stack-sm">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            Featured Implementation
          </h2>
          <span className="font-code-label-sm text-slate-data">[PRJ_ALPHA]</span>
        </div>
        <Reveal>
          <div className="lift-hover border border-grid-line bg-surface-background flex flex-col md:flex-row relative">
            <div className="absolute top-2 left-2 font-code-label-sm text-slate-data z-10 bg-surface-background px-1">
              [MOD_01]
            </div>
            <div className="w-full md:w-1/2 aspect-video bg-surface-container-low border-b md:border-b-0 md:border-r border-grid-line">
              <SmartImage
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD37I-Xo_MgKIRWk_9VWQjMT33PoMLNhc8jGnnJywJyUViD9z6yO9NJjJYZwNuWbuGVnB_dlgrt4V39Zfm1aZkK5ifymqTiuA9hbBmJVM3DM6WrK_eDEpugytznBWjiy7aqKROyK7_UbHgpGAI1zsd4THT24sxLR93v9w5ZOXW-hmYN2gywaaXjgygU7ap3jTqPrlszymeIf--bOfCCS_7pH6wevyGIttYOyxYdvg0f_jsNY4WTSdZv"
                alt="A detailed, high-contrast digital rendering of a complex financial data dashboard."
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                wrapperClassName="h-full"
                imageClassName="object-cover opacity-90 grayscale hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700"
              />
            </div>
            <div className="w-full md:w-1/2 p-stack-lg flex flex-col justify-center">
              <div className="flex gap-stack-sm mb-stack-md">
                <span className="font-code-label-sm border border-primary-container text-primary-container px-2 py-1 uppercase">
                  Fintech
                </span>
                <span className="font-code-label-sm border border-grid-line text-on-surface-variant px-2 py-1 uppercase">
                  Architecture
                </span>
              </div>
              <h3 className="font-display-lg text-3xl font-bold mb-stack-md text-on-surface">
                Global Ledger Core
              </h3>
              <p className="font-body-md text-on-surface-variant mb-stack-lg">
                A complete restructuring of legacy transaction processing
                systems for a Tier-1 retail bank. The solution decreased latency
                by 40% while implementing immutable audit trails via a
                distributed structural database.
              </p>
              <div>
                <Link
                  href="/products"
                  className="bg-transparent text-primary-container font-code-label-lg px-6 py-2 uppercase tracking-wider hover:bg-primary-container/5 transition-colors border border-primary-container inline-flex items-center gap-2"
                >
                  View Case Study
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CTA Section */}
      <section className="px-margin-desktop py-32 bg-surface-container-highest border-b border-grid-line text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMwRjc2NkUiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-20"></div>
        <Reveal>
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="font-code-label-sm text-primary mb-stack-md block uppercase">
              [INITIATE_CONTACT]
            </span>
            <h2 className="font-display-lg text-4xl font-bold mb-stack-md text-on-surface">
              Ready to Engineer Your Next Platform?
            </h2>
            <p className="font-body-md text-on-surface-variant mb-stack-lg">
              Engage our architects to discuss structural solutions for your
              complex technical requirements.
            </p>
            <Link
              href="/consultation"
              className="btn-glow btn-shine inline-block bg-primary-container text-on-tertiary font-code-label-lg px-8 py-4 uppercase tracking-wider border border-primary-container"
            >
              Initialize Consultation
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
