import type React from "react";

type StatRowProps = {
  label: string;
  value: React.ReactNode;
  accent?: boolean;
};

export function StatRow({ label, value, accent = false }: StatRowProps) {
  return (
    <div className="flex items-baseline justify-between py-1.5 lg:py-2 border-b border-border-dim">
      <span className="text-sm lg:text-base tracking-widest text-muted-light uppercase">
        {label}
      </span>
      <span
        className={`text-base lg:text-lg font-squada tracking-wide ${
          accent ? "text-accent" : "text-text-sub"
        }`}
      >
        {value}
      </span>
    </div>
  );
}
