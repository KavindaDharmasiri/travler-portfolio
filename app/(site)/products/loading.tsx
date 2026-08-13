export default function Loading() {
  return (
    <section className="px-margin-mobile md:px-margin-desktop py-stack-lg flex flex-col md:flex-row gap-margin-desktop">
      <aside className="w-full md:w-64 flex-shrink-0">
        <div className="skeleton h-4 w-40 mb-6" />
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="skeleton h-10 w-full mb-2" />
        ))}
      </aside>
      <div className="flex-grow grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-gutter">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="border border-grid-line">
            <div className="p-4 border-b border-grid-line flex justify-between items-center">
              <div className="skeleton h-4 w-16" />
              <div className="skeleton h-4 w-16" />
            </div>
            <div className="skeleton h-48 w-full border-b border-grid-line rounded-none" />
            <div className="p-6">
              <div className="skeleton h-6 w-40 mb-3" />
              <div className="skeleton h-4 w-full mb-2" />
              <div className="skeleton h-4 w-2/3 mb-6" />
              <div className="flex gap-2">
                <div className="skeleton h-6 w-20" />
                <div className="skeleton h-6 w-20" />
                <div className="skeleton h-6 w-20" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
