import { createFileRoute } from "@tanstack/react-router";
import { ClippedCard } from "@/components/clipped-card";
import { Header } from "@/components/header";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
});

type Project = {
  variant: "preview" | "locked";
  title?: string;
};

const projects: Project[] = [
  { variant: "preview", title: "OBSIDIAN\nSYNC WORKERS" },
  { variant: "preview", title: "OJII3.DEV" },
  { variant: "preview", title: "COMPETITIVE\nPROGRAMMING" },
  { variant: "locked" },
  { variant: "locked" },
  { variant: "locked" },
  { variant: "locked" },
  { variant: "locked" },
  { variant: "locked" },
];

function ProjectsPage() {
  return (
    <div className="flex flex-col gap-4 min-h-screen">
      <Header title="PROJECTS" />

      {/* Projects grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 px-4 pb-4 max-w-panel-max lg:max-w-3xl mx-auto w-full">
        {projects.map((project, i) => (
          <ClippedCard
            key={`project-${project.variant}-${i}`}
            variant={project.variant}
            title={project.title}
          />
        ))}
      </div>
    </div>
  );
}
