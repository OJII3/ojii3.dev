import type * as React from "react";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type ClippedCardProps = {
  variant: "preview" | "locked";
  title?: string;
  subtitle?: string;
  image?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const ClippedCard = forwardRef<HTMLButtonElement, ClippedCardProps>(
  function ClippedCard(
    { variant, title, subtitle, image, className, disabled, ...props },
    ref,
  ) {
    const isPreview = variant === "preview";

    return (
      <button
        ref={ref}
        type="button"
        disabled={disabled ?? !isPreview}
        className={cn(
          "group relative w-full aspect-project-card overflow-hidden clip-project-card text-left disabled:cursor-default focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
          className,
        )}
        {...props}
      >
        <div
          className={`absolute inset-0 ${
            isPreview
              ? "bg-linear-to-b from-brand to-brand-pressed"
              : "bg-linear-to-b from-content-muted to-content-disabled"
          }`}
        />

        <div
          className={`absolute inset-shape-border bg-linear-to-b clip-project-card-inner ${
            isPreview
              ? "from-brand to-brand-deep"
              : "from-content-disabled to-line-emphasis"
          }`}
        />

        {image && (
          <>
            <img
              className="h-full w-full absolute object-cover"
              aria-label={title}
              src={image}
            />
            <div className="h-full w-full absolute bg-linear-to-b from-20% to-brand-deep/50" />
          </>
        )}

        <div className="relative z-10 flex h-full flex-col justify-between p-4 lg:p-5">
          <p className="font-squada text-xl leading-none text-content-inverse">
            {isPreview ? "PREVIEW" : "NO DATA"}
          </p>
          <div className="whitespace-pre-line font-squada text-base leading-tight text-content-secondary lg:text-xl">
            {isPreview && title ? (
              <p>{title}</p>
            ) : (
              <p>{subtitle ?? "LOCKED"}</p>
            )}
          </div>
        </div>
      </button>
    );
  },
);
