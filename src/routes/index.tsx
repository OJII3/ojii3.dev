import { createFileRoute } from "@tanstack/react-router";
import { ProfilePanel } from "@/components/profile-panel";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="flex flex-col items-start py-4 min-h-screen">
      <ProfilePanel />
    </div>
  );
}
