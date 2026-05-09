import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <div className="min-h-dvh bg-canvas text-content-primary font-squada">
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  );
}
