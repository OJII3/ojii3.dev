import type React from "react";

type StatRowProps = {
  label: string;
  value: React.ReactNode;
  accent?: boolean;
};

export function StatRow({ label, value, accent = false }: StatRowProps) {
  return (
    <div className="flex items-baseline justify-between py-1.5 lg:py-2 border-b border-line-subtle">
      <span className="text-sm lg:text-lg tracking-widest text-content-muted uppercase">
        {label}
      </span>
      <span
        className={`text-base lg:text-xl font-squada tracking-wide ${
          accent ? "text-brand" : "text-content-secondary"
        }`}
      >
        {value}
      </span>
    </div>
  );
}
