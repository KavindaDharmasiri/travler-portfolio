"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex-1 flex items-center justify-center px-margin-desktop py-24">
      <div className="text-center max-w-lg">
        <p className="font-code-label-sm text-code-label-sm text-error mb-stack-sm">
          [ERR_RUNTIME]
        </p>
        <h1 className="font-display-lg text-display-lg text-on-surface mb-stack-md">
          Something went wrong
        </h1>
        <button
          type="button"
          onClick={reset}
          className="btn-glow bg-primary-container text-on-tertiary font-code-label-lg px-6 py-3 uppercase tracking-wider border border-primary-container"
        >
          Retry
        </button>
      </div>
    </main>
  );
}
