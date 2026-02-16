import { Info } from "lucide-react";
import { useState } from "react";
import { AngledButton } from "@/components/angled-button";
import { LinkCard } from "@/components/link-card";
import { StatRow } from "@/components/stat-row";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const TABS = ["BASIC", "SKILLS", "LINKS"] as const;
type Tab = (typeof TABS)[number];

const SKILLS: { name: string; good?: boolean }[] = [
  { name: "TypeScript", good: true },
  { name: "Unity", good: true },
  { name: "Linux", good: true },
  { name: "Blender", good: true },
  { name: "React" },
  { name: "C#" },
  { name: "ROS 2" },
  { name: "Python" },
  { name: "C++" },
];

function BasicTab() {
  return (
    <div className="flex flex-col">
      <div className="mb-3 lg:mb-4">
        <AngledButton to="/projects" label="PROJECTS" />
      </div>
      <StatRow label="HANDLE" value="OKAZU / OJII3" accent />
      <StatRow
        label="AFFILIATION"
        value={
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="inline-flex items-center gap-1 cursor-help">
                  <Info className="size-3 lg:size-4 text-muted-light" />
                  TUAT
                </span>
              </TooltipTrigger>
              <TooltipContent>東京農工大学</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        }
      />
      <StatRow label="SPECIALTY" value="Computer Science" />
      <StatRow label="FOCUS" value="Web / Systems" accent />
      <StatRow label="LOCATION" value="Japan" />
    </div>
  );
}

function SkillsTab() {
  return (
    <div className="grid grid-cols-2 gap-x-4 lg:gap-x-6">
      {SKILLS.map((s) => (
        <div
          key={s.name}
          className="flex items-center justify-between py-1.5 lg:py-2 border-b border-border-dim"
        >
          <span
            className={`text-sm lg:text-lg tracking-wider ${s.good ? "text-accent" : "text-muted-light"}`}
          >
            {s.name}
          </span>
          {s.good && (
            <span className="text-2xs lg:text-sm tracking-wider text-accent/70 font-squada border border-accent/30 rounded-full px-1.5 lg:px-2.5 py-0.5 lg:py-1 leading-none">
              ★ good
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

function LinksTab() {
  return (
    <div className="flex flex-col gap-2 lg:gap-3">
      <LinkCard label="GITHUB" href="https://github.com/OJII3" external />
      <LinkCard label="X / TWITTER" href="https://x.com/OJII3_" external />
    </div>
  );
}

export function ProfilePanel() {
  const [activeTab, setActiveTab] = useState<Tab>("BASIC");

  return (
    <div className="flex flex-col items-start overflow-hidden p-4 lg:p-6 w-full max-w-panel-max lg:max-w-xl mx-auto">
      {/* Section label */}
      <p className="text-xs lg:text-sm tracking-[0.2em] text-muted-light uppercase mb-2 lg:mb-3 pl-1">
        profile
      </p>

      <div className="relative w-full max-w-panel-inner lg:max-w-none">
        {/* Background panel */}
        <div
          className="relative bg-bg-panel w-full"
          style={{
            clipPath:
              "polygon(0 0, 100% 0, 100% 40px, calc(100% - 8px) 48px, calc(100% - 8px) calc(100% - 48px), 100% calc(100% - 40px), 100% 100%, 0 100%)",
          }}
        >
          <div className="p-4 lg:p-6 pr-6 pb-4">
            {/* Name & Avatar area */}
            <div
              className="relative h-avatar-area lg:h-[7.5rem] w-full"
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
                  <p className="text-2xl lg:text-4xl text-white font-squada leading-none">
                    OKAZU
                  </p>
                  <p className="text-sm lg:text-lg text-muted-light tracking-wider mt-1">
                    CS Student
                  </p>
                </div>
                {/* Avatar circle */}
                <img
                  src="/images/avatar.png"
                  alt="Avatar"
                  className="w-avatar lg:w-[5rem] h-avatar lg:h-[5rem] rounded-full object-cover mr-14 shrink-0"
                />
              </div>
            </div>

            {/* Level badge + Tech tags */}
            <div className="flex items-center gap-2 mt-3 flex-wrap">
              {/* Level badge */}
              <span
                className="inline-flex items-center justify-center h-badge-h lg:h-[1.875rem] px-3 lg:px-4 bg-accent text-xs-plus lg:text-sm font-squada text-text-on-accent tracking-wider"
                style={{
                  clipPath:
                    "polygon(4px 0, calc(100% - 4px) 0, 100% 50%, calc(100% - 4px) 100%, 4px 100%, 0 50%)",
                }}
              >
                B4
              </span>
            </div>

            {/* Separator */}
            <div className="h-px bg-border-dim mt-4 lg:mt-5 mb-3 lg:mb-4" />

            {/* Tab content */}
            <div className="min-h-tab-min lg:min-h-[14rem]">
              {activeTab === "BASIC" && <BasicTab />}
              {activeTab === "SKILLS" && <SkillsTab />}
              {activeTab === "LINKS" && <LinksTab />}
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

      {/* Fixed tab bar island */}
      <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center px-4 lg:px-6">
        <div className="w-full max-w-panel-max lg:max-w-xl border-2 border-muted-light bg-bg-button flex items-center p-2 gap-2">
          {TABS.map((tab, i) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`flex-1 h-tab-h lg:h-[2.5rem] text-sm lg:text-lg font-squada tracking-wider transition-colors ${i > 0 ? "-ml-2" : ""} ${
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
  );
}
