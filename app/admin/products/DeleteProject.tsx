"use client";

import { deleteProjectAction } from "../../actions/projects";
import { confirmDelete } from "../../lib/sweet";

export default function DeleteProject({
  slug,
  name,
}: {
  slug: string;
  name: string;
}) {
  return (
    <form
      action={deleteProjectAction.bind(null, slug)}
      className="inline"
      onSubmit={async (e) => {
        const confirmed = await confirmDelete({
          title: "DELETE_PROJECT",
          name,
          hint: "This permanently removes the record from the project registry.",
        });
        if (!confirmed) e.preventDefault();
      }}
    >
      <button
        type="submit"
        className="text-slate-data hover:text-error transition-colors p-1"
        title="Delete"
      >
        <span className="material-symbols-outlined text-[18px]">delete</span>
      </button>
    </form>
  );
}
