import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "../../components/Reveal";

export const metadata: Metadata = {
  title: "Insights",
  description: "Technical notes and engineering insights from Travler.",
};

const posts = [
  {
    slug: "scaling-transaction-pipelines",
    title: "Scaling Transaction Pipelines",
    excerpt:
      "Practical patterns for high-throughput, low-latency financial transaction processing.",
    date: "2026-01-10",
  },
  {
    slug: "designing-admin-workflows",
    title: "Designing Admin Workflows",
    excerpt:
      "How to keep internal tools fast, auditable, and pleasant to use.",
    date: "2026-02-04",
  },
];

export default function InsightsPage() {
  return (
    <main className="flex-1 px-margin-mobile md:px-margin-desktop py-stack-lg max-w-7xl mx-auto w-full">
      <Reveal>
        <header className="mb-stack-lg border-b border-grid-line pb-stack-lg">
          <p className="font-code-label-sm text-code-label-sm text-slate-data mb-stack-sm">
            [INSIGHTS]
          </p>
          <h1 className="font-display-lg text-display-lg text-on-surface mb-stack-md">
            Insights
          </h1>
          <p className="font-body-md text-on-surface-variant max-w-2xl">
            Short technical notes on backend systems, platforms, and engineering
            practice.
          </p>
        </header>
      </Reveal>
      <div className="grid gap-gutter">
        {posts.map((post, i) => (
          <Reveal key={post.slug} delay={i * 80}>
            <article className="border border-grid-line bg-surface-container-lowest p-stack-lg">
              <p className="font-code-label-sm text-code-label-sm text-slate-data mb-stack-xs">
                {post.date}
              </p>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-stack-sm">
                {post.title}
              </h2>
              <p className="font-body-md text-on-surface-variant mb-stack-md">
                {post.excerpt}
              </p>
              <Link
                href={`/insights/${post.slug}`}
                className="font-code-label-sm text-code-label-sm text-primary-container uppercase hover:underline"
              >
                Read more
              </Link>
            </article>
          </Reveal>
        ))}
      </div>
    </main>
  );
}
