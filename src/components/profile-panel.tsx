import { useState } from "react";
import { AngledButton } from "@/components/angled-button";
import { LinkCard } from "@/components/link-card";
import { StatRow } from "@/components/stat-row";

const TABS = ["BASIC", "SKILLS", "LINKS"] as const;
type Tab = (typeof TABS)[number];

const SKILLS: { name: string; rank: "S" | "A" | "B" }[] = [
  { name: "TypeScript", rank: "S" },
  { name: "React", rank: "S" },
  { name: "Tailwind", rank: "S" },
  { name: "Rust", rank: "A" },
  { name: "Go", rank: "A" },
  { name: "Linux", rank: "A" },
  { name: "C/C++", rank: "B" },
  { name: "Docker", rank: "B" },
];

function rankColor(rank: "S" | "A" | "B") {
  switch (rank) {
    case "S":
      return "text-accent";
    case "A":
      return "text-text-sub";
    case "B":
      return "text-muted-light";
  }
}

function TechTag({ label }: { label: string }) {
  return (
    <span
      className="inline-flex items-center h-[22px] px-2 text-[10px] tracking-wider text-text-sub border border-border uppercase"
      style={{
        clipPath: "polygon(4px 0, 100% 0, calc(100% - 4px) 100%, 0 100%)",
      }}
    >
      {label}
    </span>
  );
}

function BasicTab() {
  return (
    <div className="flex flex-col">
      <div className="mb-3">
        <AngledButton to="/works" label="WORKS" />
      </div>
      <StatRow label="HANDLE" value="@OJII3" accent />
      <StatRow label="AFFILIATION" value="Keio Univ." />
      <StatRow label="SPECIALTY" value="Computer Science" />
      <StatRow label="FOCUS" value="Web / Systems" accent />
      <StatRow label="LOCATION" value="Japan" />
    </div>
  );
}

function SkillsTab() {
  return (
    <div className="grid grid-cols-2 gap-x-4">
      {SKILLS.map((s) => (
        <div
          key={s.name}
          className="flex items-baseline justify-between py-1.5 border-b border-border-dim"
        >
          <span className="text-[12px] tracking-wider text-muted-light">
            {s.name}
          </span>
          <span className={`text-[14px] font-squada ${rankColor(s.rank)}`}>
            {s.rank}
          </span>
        </div>
      ))}
    </div>
  );
}

function LinksTab() {
  return (
    <div className="flex flex-col gap-2">
      <LinkCard label="GITHUB" href="https://github.com/OJII3" external />
      <LinkCard label="X / TWITTER" href="https://x.com/OJII3_" external />
    </div>
  );
}

export function ProfilePanel() {
  const [activeTab, setActiveTab] = useState<Tab>("BASIC");

  return (
    <div className="flex flex-col items-start overflow-hidden p-4 w-full max-w-[402px] mx-auto">
      {/* Section label */}
      <p className="text-[10px] tracking-[0.2em] text-muted-light uppercase mb-2 pl-1">
        profile
      </p>

      <div className="relative w-full max-w-[370px]">
        {/* Background panel */}
        <div
          className="relative bg-bg-panel w-full"
          style={{
            clipPath:
              "polygon(0 0, 100% 0, 100% 40px, calc(100% - 8px) 48px, calc(100% - 8px) calc(100% - 48px), 100% calc(100% - 40px), 100% 100%, 0 100%)",
          }}
        >
          <div className="p-4 pr-6 pb-4">
            {/* Name & Avatar area */}
            <div
              className="relative h-[100px] w-full"
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, 100% calc(100% - 32px), calc(100% - 32px) 100%, 0 100%)",
              }}
            >
              {/* Border layer */}
              <div className="absolute inset-0 bg-border-light" />
              {/* Background layer */}
              <div
                className="absolute inset-[1px] bg-bg-dark"
                style={{
                  clipPath:
                    "polygon(0 0, 100% 0, 100% calc(100% - 31px), calc(100% - 31px) 100%, 0 100%)",
                }}
              />
              {/* Content */}
              <div className="relative z-10 flex items-center justify-between h-full">
                <div className="pl-5">
                  <p className="text-[36px] text-white font-squada leading-none">
                    OKAZU
                  </p>
                  <p className="text-[12px] text-muted-light tracking-wider mt-1">
                    Web Developer
                  </p>
                </div>
                {/* Avatar circle */}
                <div className="w-[64px] h-[64px] rounded-full bg-text-sub mr-14 shrink-0" />
              </div>
            </div>

            {/* Level badge + Tech tags */}
            <div className="flex items-center gap-2 mt-3 flex-wrap">
              {/* Level badge */}
              <span
                className="inline-flex items-center justify-center h-[24px] px-3 bg-accent text-[11px] font-squada text-text-on-accent tracking-wider"
                style={{
                  clipPath:
                    "polygon(4px 0, calc(100% - 4px) 0, 100% 50%, calc(100% - 4px) 100%, 4px 100%, 0 50%)",
                }}
              >
                LV.25
              </span>
              <TechTag label="React" />
              <TechTag label="TypeScript" />
              <TechTag label="Rust" />
            </div>

            {/* Separator */}
            <div className="h-px bg-border-dim mt-4 mb-3" />

            {/* Tab content */}
            <div className="min-h-[180px]">
              {activeTab === "BASIC" && <BasicTab />}
              {activeTab === "SKILLS" && <SkillsTab />}
              {activeTab === "LINKS" && <LinksTab />}
            </div>

            {/* Tab bar */}
            <div className="flex mt-4">
              {TABS.map((tab, i) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 h-[32px] text-[12px] font-squada tracking-wider transition-colors ${i > 0 ? "-ml-2" : ""} ${
                    activeTab === tab
                      ? "bg-accent text-text-on-accent z-10"
                      : "bg-bg-dark text-muted-light hover:text-text-sub"
                  }`}
                  style={{
                    clipPath:
                      "polygon(12px 0, 100% 0, calc(100% - 12px) 100%, 0 100%)",
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* SVG border outline */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 370 500"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M0 0 L370 0 L370 40 L362 48 L362 452 L370 460 L370 500 L0 500 Z"
            stroke="var(--color-muted)"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>
    </div>
  );
}
