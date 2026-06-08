import { createFileRoute } from "@tanstack/react-router";
import { ClippedCard } from "@/components/clipped-card";
import { Header } from "@/components/header";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
});

type Project = {
  id: string;
  variant: "preview" | "locked";
  title?: string;
  category?: string;
  status?: string;
  type?: string;
  summary?: string;
  stack?: string[];
  href?: string;
};

const projects: Project[] = [
  {
    id: "obsidian-sync-workers",
    variant: "preview",
    title: "OBSIDIAN\nSYNC WORKERS",
    category: "WORKER",
    status: "ACTIVE",
    type: "SYNC TOOL",
    summary:
      "Obsidian のノートを Cloudflare Workers 経由で同期するための実験プロジェクト。画像がなくても、同期対象、実行環境、状態をデータカードとして読める構成にする。",
    stack: ["Cloudflare Workers", "TypeScript", "Obsidian"],
  },
  {
    id: "ojii3-dev",
    variant: "preview",
    title: "OJII3.DEV",
    category: "PORTFOLIO",
    status: "BUILDING",
    type: "WEB SITE",
    summary:
      "OJII3 のポートフォリオサイト。ゲーム UI 的な情報密度と、画像素材に依存しないプロジェクト表示を両立するための実装。",
    stack: ["React", "Vite", "Tailwind CSS"],
  },
  {
    id: "",
    variant: "preview",
    title: "283 Production XXXX Performance XXX= S/N-GUL4R1TY",
    category: "JOB",
    status: "LOGGED",
    type: "Robot",
    summary: "Robotics Software Engineer を担当しました",
    stack: [],
  },
  { id: "locked-1", variant: "locked" },
  { id: "locked-2", variant: "locked" },
  { id: "locked-3", variant: "locked" },
  { id: "locked-4", variant: "locked" },
  { id: "locked-5", variant: "locked" },
];

function ProjectDetailPanel({ project }: { project: Project }) {
  const title = project.title?.replace(/\n/g, " ") ?? "NO DATA";

  return (
    <DialogContent className="max-w-project-detail-max">
      <DialogClose className="-top-12 left-0 absolute inline-flex h-8 w-12 items-center justify-center rounded-full border-2 border-brand text-brand transition-colors hover:bg-brand hover:text-content-inverse focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
        <span className="sr-only">Close project detail</span>
        <svg
          width="26"
          height="18"
          viewBox="0 0 26 18"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M9 2L2 9L9 16M3 9H18C22 9 24 7 24 4"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </DialogClose>

      <div className="project-detail-panel project-detail-shell overflow-hidden border-2 border-line-deep bg-surface-raised shadow-2xl">
        <div className="hidden bg-surface-sunken px-2 py-4 lg:flex lg:items-center lg:justify-center">
          <p className="project-detail-side-label font-squada text-4xl leading-none text-line-default">
            DATA FILE
          </p>
        </div>

        <div className="project-detail-content">
          <div className="flex flex-col gap-3">
            <div className="aspect-project-detail-media overflow-hidden border-4 border-line-deep bg-surface-sunken p-2 clip-project-card lg:aspect-project-card">
              <div className="project-data-pattern flex size-full flex-col justify-between p-3 clip-project-card-inner">
                <p className="font-squada text-xl leading-none text-content-primary">
                  {project.category ?? "PROJECT"}
                </p>
                <p className="whitespace-pre-line font-squada text-lg leading-tight text-brand">
                  {project.title}
                </p>
              </div>
            </div>

            <p className="bg-surface-sunken px-3 py-1 text-center font-squada text-sm text-brand">
              {project.status ?? "LOCKED"}
            </p>
          </div>

          <div className="min-w-0">
            <DialogTitle className="text-3xl text-content-primary lg:text-4xl">
              {title}
            </DialogTitle>
            <DialogDescription className="mt-1 font-squada text-sm tracking-wider text-content-muted">
              PROJECT DATA
            </DialogDescription>

            <dl className="mt-4 grid grid-cols-1 gap-2 text-sm lg:grid-cols-2">
              <div className="flex justify-between gap-3 bg-surface-sunken px-3 py-2">
                <dt className="font-squada text-content-muted">CATEGORY</dt>
                <dd className="font-squada text-content-primary">
                  {project.category}
                </dd>
              </div>
              <div className="flex justify-between gap-3 bg-surface-sunken px-3 py-2">
                <dt className="font-squada text-content-muted">TYPE</dt>
                <dd className="font-squada text-content-primary">
                  {project.type}
                </dd>
              </div>
            </dl>

            <div className="mt-4 border-t border-line-subtle pt-4">
              <p className="font-squada text-sm tracking-wider text-content-muted">
                NOTES
              </p>
              <p className="mt-2 text-sm leading-relaxed text-content-secondary">
                {project.summary}
              </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack?.map((item) => (
                <span
                  key={item}
                  className="border border-line-emphasis bg-surface-sunken px-2 py-1 font-squada text-xs text-content-secondary"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DialogContent>
  );
}

function ProjectsPage() {
  return (
    <main className="flex min-h-dvh flex-col gap-8 w-full max-w-panel-max mx-auto lg:max-w-projects-grid-max">
      <Header title="WORKS" />

      <div className="grid box-border grid-cols-2 gap-4 px-4 pb-6 lg:grid-cols-4 lg:gap-5 lg:px-0 lg:pt-2">
        {projects.map((project) => (
          <Dialog key={project.id}>
            <DialogTrigger asChild>
              <ClippedCard
                variant={project.variant}
                title={project.title}
                aria-label={
                  project.variant === "preview"
                    ? `Open ${project.title?.replace(/\n/g, " ")}`
                    : "Locked project"
                }
              />
            </DialogTrigger>
            {project.variant === "preview" && (
              <ProjectDetailPanel project={project} />
            )}
          </Dialog>
        ))}
      </div>
    </main>
  );
}
