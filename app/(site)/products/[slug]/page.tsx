import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import SmartImage from "../../../components/SmartImage";
import Reveal from "../../../components/Reveal";
import { loadProject } from "../../../lib/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = await loadProject(slug);
  if (!product) return { title: "Not Found" };
  return {
    title: product.name,
    description: product.blurb,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = await loadProject(slug);

  if (!product) notFound();

  return (
    <main className="flex-grow px-margin-mobile md:px-margin-desktop py-stack-lg max-w-7xl mx-auto w-full">
      <Reveal>
        <section className="mb-stack-lg border-b border-grid-line pb-stack-lg">
          <div className="flex flex-wrap items-center gap-stack-sm mb-stack-sm">
            <span className="font-code-label-sm text-code-label-sm text-slate-data border border-grid-line px-2 py-1">
              [MOD_{product.category.toUpperCase()}]
            </span>
            <span className="font-code-label-sm text-code-label-sm text-primary-container">
              {product.category}
            </span>
          </div>
          <h1 className="font-display-lg text-display-lg text-on-surface mb-stack-md">
            {product.name}
          </h1>
          <p
            className="font-body-md text-body-md text-on-surface-variant mb-stack-md"
            style={{ maxWidth: "36rem" }}
          >
            {product.blurb}
          </p>
          <div className="flex flex-wrap gap-2">
            {product.tech.map((t) => (
              <span
                key={t}
                className="font-code-label-sm text-code-label-sm px-2 py-1 border border-grid-line text-slate-data bg-surface-container-lowest"
              >
                {t}
              </span>
            ))}
          </div>
        </section>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div className="md:col-span-8">
          <Reveal>
            <div className="border border-grid-line relative overflow-hidden bg-surface-container-low">
              <div className="absolute top-2 left-2 font-code-label-sm text-code-label-sm text-slate-data z-10 bg-surface-background px-1">
                [SCREENSHOT]
              </div>
              <SmartImage
                src={product.image}
                alt={product.imageAlt || `${product.name} screenshot`}
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                wrapperClassName="aspect-video"
                imageClassName="object-cover opacity-90 hover:opacity-100 img-zoom transition-opacity"
              />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <section className="mt-stack-lg">
              <h2 className="font-headline-lg text-headline-lg mb-stack-sm">
                The Problem
              </h2>
              <p
                className="font-body-md text-body-md text-on-surface-variant"
                style={{ maxWidth: "40rem" }}
              >
                {product.problem}
              </p>
            </section>
          </Reveal>

          <Reveal delay={150}>
            <section className="mt-stack-lg">
              <h2 className="font-headline-lg text-headline-lg mb-stack-md">
                Key Features
              </h2>
              <ul className="flex flex-col">
                {product.features.map((f, i) => (
                  <li
                    key={f}
                    style={{ animationDelay: `${i * 70}ms` }}
                    className="rise-in flex items-start gap-stack-sm border-b border-grid-line py-stack-sm"
                  >
                    <span className="material-symbols-outlined text-sm text-primary-container mt-0.5">
                      check_circle
                    </span>
                    <span className="font-body-md text-body-md text-on-surface-variant">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        </div>

        <Reveal delay={200} className="md:col-span-4">
          <div className="lift-hover border border-grid-line p-stack-lg bg-surface-background relative h-full">
            <div className="absolute top-0 right-0 p-stack-sm font-code-label-sm text-code-label-sm text-slate-data">
              [CTA]
            </div>
            <span className="font-code-label-sm text-code-label-sm text-primary-container mb-stack-md inline-block">
              Inquiry
            </span>
            <h3 className="font-body-md text-body-md font-semibold mb-stack-sm">
              Interested in something similar?
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-stack-lg">
              I&apos;ll reply with options for scope, timeline, and cost.
            </p>
            <Link
              href={`/contact?product=${product.name}`}
              className="btn-glow btn-shine inline-block bg-primary-container text-on-tertiary font-code-label-lg px-6 py-3 uppercase tracking-wider border border-primary-container"
            >
              Start a Project
            </Link>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
