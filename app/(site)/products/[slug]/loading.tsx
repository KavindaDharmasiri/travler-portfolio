export default function Loading() {
  return (
    <div className="px-margin-mobile md:px-margin-desktop py-stack-lg">
      <div className="skeleton h-5 w-40 mb-6" />
      <div className="skeleton h-14 w-full max-w-3xl mb-8" />
      <div className="skeleton h-6 w-full max-w-2xl mb-8" />
      <div className="flex gap-2 mb-12">
        <div className="skeleton h-7 w-24" />
        <div className="skeleton h-7 w-24" />
        <div className="skeleton h-7 w-24" />
      </div>
      <div className="grid grid-cols-12 gap-gutter">
        <div className="col-span-8">
          <div className="skeleton h-64 w-full mb-8" />
          <div className="skeleton h-4 w-full mb-2" />
          <div className="skeleton h-4 w-3/4" />
        </div>
        <div className="col-span-4">
          <div className="skeleton h-64 w-full" />
        </div>
      </div>
    </div>
  );
}
