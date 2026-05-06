import { createFileRoute } from "@tanstack/react-router";
import { ClippedCard } from "@/components/clipped-card";
import { Header } from "@/components/header";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
});

type Project = {
  id: string;
  variant: "preview" | "locked";
  title?: string;
};

const projects: Project[] = [
  {
    id: "obsidian-sync-workers",
    variant: "preview",
    title: "OBSIDIAN\nSYNC WORKERS",
  },
  { id: "ojii3-dev", variant: "preview", title: "OJII3.DEV" },
  {
    id: "competitive-programming",
    variant: "preview",
    title: "COMPETITIVE\nPROGRAMMING",
  },
  { id: "locked-1", variant: "locked" },
  { id: "locked-2", variant: "locked" },
  { id: "locked-3", variant: "locked" },
  { id: "locked-4", variant: "locked" },
  { id: "locked-5", variant: "locked" },
];

function ProjectsPage() {
  return (
    <div className="flex flex-col gap-4 min-h-screen">
      <Header title="PROJECTS" />

      {/* Projects grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 px-4 pb-4 max-w-panel-max lg:max-w-3xl mx-auto w-full">
        {projects.map((project) => (
          <ClippedCard
            key={project.id}
            variant={project.variant}
            title={project.title}
          />
        ))}
      </div>
    </div>
  );
}
