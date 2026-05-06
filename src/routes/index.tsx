import { createFileRoute } from "@tanstack/react-router";
import { ProfilePanel } from "@/components/profile-panel";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <main className="min-h-screen px-4 py-4 lg:px-8 lg:py-6">
      <div className="home-profile-shell mx-auto">
        <div className="home-model-stage" aria-hidden="true" />
        <ProfilePanel className="lg:mx-0 lg:justify-self-end" />
      </div>
    </main>
  );
}
