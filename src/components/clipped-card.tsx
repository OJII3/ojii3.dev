type ClippedCardProps = {
  variant: "preview" | "locked";
  title?: string;
  subtitle?: string;
};

export function ClippedCard({ variant, title, subtitle }: ClippedCardProps) {
  const isPreview = variant === "preview";

  return (
    <div className="relative w-full aspect-project-card overflow-hidden clip-project-card">
      {/* Background gradient */}
      <div
        className={`absolute inset-0 ${
          isPreview
            ? "bg-gradient-to-b from-brand to-brand-pressed"
            : "bg-gradient-to-b from-content-muted to-content-disabled"
        }`}
      />

      {/* Border effect */}
      <div
        className={`absolute inset-shape-border bg-gradient-to-b clip-project-card-inner ${
          isPreview
            ? "from-brand to-brand-deep"
            : "from-content-disabled to-line-emphasis"
        }`}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full p-4 lg:p-5">
        <p className="text-xl text-content-inverse font-squada leading-none">
          {isPreview ? "PREVIEW" : "NO DATA"}
        </p>
        <div className="text-content-secondary text-base lg:text-xl font-squada leading-tight">
          {isPreview && title ? <p>{title}</p> : <p>{subtitle ?? "LOCKED"}</p>}
        </div>
      </div>
    </div>
  );
}
