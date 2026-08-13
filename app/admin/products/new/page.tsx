import ProjectForm from "../ProjectForm";

export const metadata = {
  title: "Add Project | Admin",
  robots: { index: false, follow: false },
};

export default function AddProjectPage() {
  return <ProjectForm mode="add" />;
}
