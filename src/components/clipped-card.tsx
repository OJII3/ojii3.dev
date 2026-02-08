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
            ? "bg-gradient-to-b from-[#ff3300] to-[#cc2200]"
            : "bg-gradient-to-b from-[#999] to-[#666]"
        }`}
      />

      {/* Border effect */}
      <div
        className="absolute inset-[3px] bg-gradient-to-b"
        style={{
          clipPath: "polygon(0 0, 85% 0, 100% 13%, 100% 100%, 0 100%)",
          background: isPreview
            ? "linear-gradient(to bottom, #ff3300, #991100)"
            : "linear-gradient(to bottom, #888, #555)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full p-4">
        <p className="text-[clamp(24px,8vw,40px)] text-black font-squada leading-none">
          {isPreview ? "PREVIEW" : "NO DATA"}
        </p>
        <div className="text-text-sub text-[clamp(14px,4vw,24px)] font-squada leading-tight">
          {isPreview && title ? <p>{title}</p> : <p>{subtitle ?? "LOCKED"}</p>}
        </div>
      </div>
    </div>
  );
}
