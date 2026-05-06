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
  { name: "Blender" },
  { name: "Network" },
  { name: "C#" },
  { name: "ROS 2" },
  { name: "Python" },
  { name: "C++" },
];

function BasicTab() {
  return (
    <div className="flex flex-col">
      <StatRow label="HANDLE" value="OKAZU / OJII3" accent />
      <StatRow
        label="AFFILIATION"
        value={
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="inline-flex items-center gap-1 cursor-help">
                  <Info className="size-3 lg:size-4 text-content-muted" />
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
          className="flex items-center justify-between py-1.5 lg:py-2 border-b border-line-subtle"
        >
          <span
            className={`text-sm lg:text-lg tracking-wider ${s.good ? "text-brand" : "text-content-muted"}`}
          >
            {s.name}
          </span>
          {s.good && (
            <span className="text-2xs lg:text-sm tracking-wider text-brand/70 font-squada border border-line-brand rounded-full px-1.5 lg:px-2.5 py-0.5 lg:py-1 leading-none">
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
    <div className="grid grid-cols-2 gap-4 lg:gap-3">
      <LinkCard label="GITHUB" href="https://github.com/OJII3" external />
      <LinkCard label="X / TWITTER" href="https://x.com/ojii3dev" external />
      <LinkCard label="Blog" href="https://blog.ojii3.dev" external />
    </div>
  );
}

export function ProfilePanel() {
  const [activeTab, setActiveTab] = useState<Tab>("BASIC");

  return (
    <div className="flex flex-col items-start overflow-hidden p-4 lg:p-6 w-full max-w-panel-max lg:max-w-xl mx-auto">
      {/* Section label */}
      <p className="text-xs lg:text-sm tracking-label text-content-muted uppercase mb-2 lg:mb-3 pl-1">
        profile
      </p>

      <div className="relative w-full max-w-panel-inner lg:max-w-none">
        {/* Background panel */}
        <div className="relative bg-surface-raised w-full clip-profile-frame">
          <div className="py-8 pl-4 lg:pl-6 pr-6 lg:pr-8 pb-4">
            {/* Name & Avatar area */}
            <div className="relative h-avatar-area lg:h-avatar-area-lg w-full clip-profile-hero">
              {/* Border layer */}
              <div className="absolute inset-0 bg-line-emphasis" />
              {/* Background layer */}
              <div className="absolute inset-px bg-surface-sunken clip-profile-hero-inner" />
              {/* Content */}
              <div className="relative z-10 flex items-center justify-between h-full">
                <div className="pl-5">
                  <p className="text-4xl lg:text-5xl text-content-primary font-squada leading-none">
                    OKAZU
                  </p>
                  <p className="text-sm lg:text-lg text-content-muted tracking-wider mt-1">
                    CS Student
                  </p>
                </div>
                {/* Avatar circle */}
                <img
                  src="/images/avatar.png"
                  alt="Avatar"
                  className="w-avatar lg:w-avatar-lg h-avatar lg:h-avatar-lg rounded-full object-cover mr-14 shrink-0"
                />
              </div>
            </div>

            {/* Level badge + Tech tags */}
            {/* <div className="flex items-center gap-2 mt-3 flex-wrap"> */}
            {/* Level badge */}
            {/*   <span className="inline-flex items-center justify-center h-badge-h lg:h-badge-h-lg px-3 lg:px-4 bg-brand text-xs-plus lg:text-sm font-squada text-content-inverse tracking-wider clip-badge"> */}
            {/*     B4 */}
            {/*   </span> */}
            {/* </div> */}

            {/* Separator */}
            <div className="h-px bg-line-subtle mt-4 lg:mt-5 mb-3 lg:mb-4" />

            <div className="mb-3 lg:mb-4">
              <AngledButton to="/projects" label="PROJECTS" />
            </div>

            {/* Tab content */}
            <div className="h-tab-min lg:h-tab-min-lg py-4 overflow-y-auto">
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
            stroke="var(--color-line-strong)"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      {/* Tab bar island */}
      <div className="w-full max-w-panel-inner lg:max-w-none border-2 border-line-strong bg-surface-control flex items-center p-2 gap-2 mt-8 px-4 lg:px-6">
        {TABS.map((tab, i) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`flex-1 h-tab-h lg:h-tab-h-lg text-sm lg:text-lg font-squada tracking-wider transition-colors clip-tab ${i > 0 ? "-ml-tab-overlap" : ""} ${
              activeTab === tab
                ? "bg-brand text-content-inverse z-10"
                : "bg-surface-sunken text-content-muted hover:text-content-secondary"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
