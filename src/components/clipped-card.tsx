type ClippedCardProps = {
  variant: "preview" | "locked";
  title?: string;
  subtitle?: string;
};

export function ClippedCard({ variant, title, subtitle }: ClippedCardProps) {
  const isPreview = variant === "preview";

  return (
    <div
      className="relative w-full aspect-[177/236] overflow-hidden"
      style={{
        clipPath: "polygon(0 0, 85% 0, 100% 12%, 100% 100%, 0 100%)",
      }}
    >
      {/* Background gradient */}
      <div
        className={`absolute inset-0 ${
          isPreview
            ? "bg-gradient-to-b from-accent to-accent-dark"
            : "bg-gradient-to-b from-muted-light to-muted"
        }`}
      />

      {/* Border effect */}
      <div
        className="absolute inset-[3px] bg-gradient-to-b"
        style={{
          clipPath: "polygon(0 0, 85% 0, 100% 13%, 100% 100%, 0 100%)",
          background: isPreview
            ? "linear-gradient(to bottom, var(--color-accent), var(--color-accent-darker))"
            : "linear-gradient(to bottom, var(--color-muted-mid), var(--color-border-light))",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full p-4 lg:p-5">
        <p className="text-lg lg:text-xl text-text-on-accent font-squada leading-none">
          {isPreview ? "PREVIEW" : "NO DATA"}
        </p>
        <div className="text-text-sub text-base lg:text-lg font-squada leading-tight">
          {isPreview && title ? <p>{title}</p> : <p>{subtitle ?? "LOCKED"}</p>}
        </div>
      </div>
    </div>
  );
}
