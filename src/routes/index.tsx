import { createFileRoute } from "@tanstack/react-router";
import { AngledButton } from "@/components/angled-button";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="flex flex-col items-start py-4 min-h-screen">
      {/* Profile Panel */}
      <div className="flex flex-col items-start overflow-hidden p-4 w-full max-w-[402px] mx-auto">
        <div className="relative w-full max-w-[370px]">
          {/* Background panel */}
          <div
            className="relative bg-bg-panel w-full"
            style={{
              clipPath:
                "polygon(0 0, 100% 0, 100% 16%, 97.8% 18.6%, 97.8% 81.4%, 100% 84%, 100% 100%, 0 100%)",
            }}
          >
            <div className="p-4 pb-24">
              {/* Name & Icon area */}
              <div
                className="relative flex items-center justify-between bg-bg-dark border border-border-light h-[127px] w-full max-w-[334px]"
                style={{
                  clipPath: "polygon(0 0, 85% 0, 100% 100%, 0 100%)",
                }}
              >
                <p className="text-[40px] text-white font-squada pl-5 leading-none">
                  OKAZU
                </p>
                {/* Avatar circle */}
                <div className="w-[80px] h-[80px] rounded-full bg-text-sub mr-12 shrink-0" />
              </div>

              {/* Works Link */}
              <div className="mt-4">
                <AngledButton to="/works" label="WORKS" />
              </div>
            </div>
          </div>
          {/* SVG border outline */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 370 318"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M0 0 L370 0 L370 51 L362 59 L362 259 L370 267 L370 318 L0 318 Z"
              stroke="var(--color-muted)"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
