export default function Loading() {
  return (
    <div className="px-margin-mobile md:px-margin-desktop py-stack-lg">
      <div className="skeleton h-5 w-64 mb-8" />
      <div className="skeleton h-14 w-full max-w-3xl mb-8" />
      <div className="skeleton h-6 w-full max-w-2xl mb-12" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="border border-grid-line p-stack-lg">
            <div className="skeleton h-6 w-24 mb-8" />
            <div className="skeleton h-4 w-full mb-2" />
            <div className="skeleton h-4 w-2/3" />
          </div>
        ))}
      </div>
    </div>
  );
}
