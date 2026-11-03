import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex-1 flex items-center justify-center px-margin-desktop py-24">
      <div className="text-center max-w-lg">
        <p className="font-code-label-sm text-code-label-sm text-slate-data mb-stack-sm">
          [ERR_404]
        </p>
        <h1 className="font-display-lg text-display-lg text-on-surface mb-stack-md">
          Route not found
        </h1>
        <p className="font-body-md text-on-surface-variant mb-stack-lg">
          The requested resource does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="btn-glow inline-block bg-primary-container text-on-tertiary font-code-label-lg px-6 py-3 uppercase tracking-wider border border-primary-container"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
