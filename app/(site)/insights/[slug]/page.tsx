import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Reveal from "../../../components/Reveal";

const posts: Record<string, { title: string; date: string; body: string }> = {
  "scaling-transaction-pipelines": {
    title: "Scaling Transaction Pipelines",
    date: "2026-01-10",
    body: "Use idempotent consumers, partitioned queues, and immutable audit trails to scale transaction processing safely.",
  },
  "designing-admin-workflows": {
    title: "Designing Admin Workflows",
    date: "2026-02-04",
    body: "Keep admin tools fast with server components, optimistic updates, and clear status transitions.",
  },
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: "Not Found" };
  return { title: post.title };
}

export default async function InsightPage({ params }: Props) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  return (
    <main className="flex-1 px-margin-mobile md:px-margin-desktop py-stack-lg max-w-3xl mx-auto w-full">
      <Reveal>
        <p className="font-code-label-sm text-code-label-sm text-slate-data mb-stack-sm">
          {post.date}
        </p>
        <h1 className="font-display-lg text-display-lg text-on-surface mb-stack-md">
          {post.title}
        </h1>
        <p className="font-body-md text-on-surface-variant">{post.body}</p>
      </Reveal>
    </main>
  );
}
