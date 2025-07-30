import { createFileRoute } from "@tanstack/react-router";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { Drawer } from "@/components/Drawer";
import { Celing } from "./_components/_Ceiling";
import { Door } from "./_components/_Door";
import { DoorFrame } from "./_components/_DoorFrame";
import { Floor } from "./_components/_Floor";
import { Wall } from "./_components/_Wall";
import { Window } from "./_components/_Window";

export const Route = createFileRoute("/hi3")({
	component: RouteComponent,
});

function RouteComponent() {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		document.addEventListener("click", () => {
			if (!isLoaded) {
				setIsLoaded(true);
			}
		});

		document.addEventListener("keydown", (e) => {
			if (!isLoaded && e.key === "Enter") {
				setIsLoaded(true);
			}
		});

		return () => {
			document.removeEventListener("click", () => {});
			document.removeEventListener("keydown", () => {});
		};
	});

	return (
		<div className="min-h-dvh w-screen">
			<Drawer />

			<div
				className={clsx(
					"transform-3d perspective-dramatic fixed top-0 grid h-screen w-screen grid-cols-[1fr_var(--spacing-door-frame)_1fr] grid-rows-[1fr_var(--spacing-door)_1fr] place-content-center delay-1000 duration-1000",
					isLoaded && "scale-300",
				)}
			>
				<Window isLoaded={isLoaded} />
				<Door isLoaded={isLoaded} />
				<DoorFrame isLoaded={isLoaded} />
				<Wall side="left" />
				<Wall side="right" />
				<Celing />
				<Floor />
			</div>
		</div>
	);
}
