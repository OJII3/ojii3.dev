import type React from "react";

type StatRowProps = {
  label: string;
  value: React.ReactNode;
  accent?: boolean;
};

export function StatRow({ label, value, accent = false }: StatRowProps) {
  return (
    <div className="flex items-baseline justify-between py-1.5 border-b border-border-dim">
      <span className="text-sm tracking-widest text-muted-light uppercase">
        {label}
      </span>
      <span
        className={`text-base font-squada tracking-wide ${
          accent ? "text-accent" : "text-text-sub"
        }`}
      >
        {value}
      </span>
    </div>
  );
}
