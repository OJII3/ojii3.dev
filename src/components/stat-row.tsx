type StatRowProps = {
  label: string;
  value: string;
  accent?: boolean;
};

export function StatRow({ label, value, accent = false }: StatRowProps) {
  return (
    <div className="flex items-baseline justify-between py-1.5 border-b border-border-dim">
      <span className="text-[12px] tracking-widest text-muted-light uppercase">
        {label}
      </span>
      <span
        className={`text-[14px] font-squada tracking-wide ${
          accent ? "text-accent" : "text-text-sub"
        }`}
      >
        {value}
      </span>
    </div>
  );
}
