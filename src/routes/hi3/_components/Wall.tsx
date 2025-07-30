import clsx from "clsx";
import type { FC } from "react";

type Props = {
	side?: "left" | "right";
};

export const Wall: FC<Props> = ({ side }) => {
	return (
		<div
			className={clsx(
				"translate-z-0 relative col-span-1 row-[2/3] h-full w-full bg-zinc-300 shadow-inner",
				side === "left"
					? "origin-right rotate-y-90"
					: "-rotate-y-90 origin-left",
			)}
		>
			<div className="absolute top-3/5 left-0 h-4 w-full bg-yellow-500" />
			<div className="absolute top-2/3 left-0 h-32 w-full bg-blue-950" />
		</div>
	);
};
