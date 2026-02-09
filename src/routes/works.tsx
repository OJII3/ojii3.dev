import { createFileRoute } from "@tanstack/react-router";
import { ClippedCard } from "@/components/clipped-card";
import { Header } from "@/components/header";

export const Route = createFileRoute("/works")({
  component: WorksPage,
});

type Work = {
  variant: "preview" | "locked";
  title?: string;
};

const works: Work[] = [
  { variant: "preview", title: "OBSIDIAN\nSYNC WORKERS" },
  { variant: "preview", title: "OJII3.DEV" },
  { variant: "preview", title: "COMPETITIVE\nPROGRAMMING" },
  { variant: "locked" },
  { variant: "locked" },
  { variant: "locked" },
  { variant: "locked" },
  { variant: "locked" },
];

function WorksPage() {
  return (
    <div className="flex flex-col gap-4 min-h-screen">
      <Header title="WORKS" />

      {/* Works grid */}
      <div className="grid grid-cols-2 gap-4 px-4 pb-4 max-w-panel-max mx-auto w-full">
        {works.map((work, i) => (
          <ClippedCard
            key={`work-${work.variant}-${i}`}
            variant={work.variant}
            title={work.title}
          />
        ))}
      </div>
    </div>
  );
}
