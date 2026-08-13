import { notFound } from "next/navigation";
import { loadProject } from "../../../../lib/projects";
import ProjectForm from "../../ProjectForm";

interface Props {
  params: Promise<{ slug: string }>;
}

export const metadata = {
  title: "Edit Project | Admin",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function EditProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = await loadProject(slug);

  if (!project) notFound();

  return <ProjectForm mode="edit" initial={project} />;
}
