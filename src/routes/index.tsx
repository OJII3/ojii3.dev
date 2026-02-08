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
            className="relative bg-[#2a2a2a] border border-[#444] w-full"
            style={{
              clipPath: "polygon(0 0, 90% 0, 100% 8%, 100% 100%, 0 100%)",
            }}
          >
            <div className="p-4 pb-24">
              {/* Name & Icon area */}
              <div
                className="relative flex items-center justify-between bg-[#1a1a1a] border border-[#555] h-[127px] w-full max-w-[334px]"
                style={{
                  clipPath: "polygon(0 0, 85% 0, 100% 100%, 0 100%)",
                }}
              >
                <p className="text-[40px] text-white font-squada pl-5 leading-none">
                  OKAZU
                </p>
                {/* Avatar circle */}
                <div className="w-[80px] h-[80px] rounded-full bg-[#ccc] mr-12 shrink-0" />
              </div>

              {/* Works Link */}
              <div className="mt-4">
                <AngledButton to="/works" label="WORKS" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
