import clsx from "clsx";
import type { FC } from "react";

type Props = {
	isLoaded?: boolean;
};

export const DoorFrame: FC<Props> = ({ isLoaded }) => {
	return (
		<div className="perspective-midrange transform-3d translate-z-3 relative col-[2/3] row-[2/3] flex h-door w-door-frame drop-shadow-lg">
			<div className="relative h-full w-full origin-left rotate-y-40 overflow-hidden">
				<div className="absolute top-0 left-0 h-full w-20 bg-gray-200" />
				<div className="absolute right-1/2 bottom-0 h-32 w-full rotate-45 bg-gray-200" />
				<div className="-rotate-45 absolute top-0 right-1/2 h-32 w-full bg-gray-200" />
			</div>
			<div className="-rotate-y-40 relative h-full w-full origin-right overflow-hidden">
				<div className="absolute top-0 right-0 h-full w-20 bg-gray-200" />
				<div className="-rotate-45 absolute bottom-0 left-1/2 h-32 w-full bg-gray-200" />
				<div className="absolute top-0 left-1/2 h-32 w-full rotate-45 bg-gray-200" />
			</div>

			<div
				className="-translate-x-1/2 absolute top-0 left-1/2 h-12 w-52 bg-gray-500 shadow-inner"
				style={{
					clipPath:
						"polygon(15px 0, 0 15px, 0 25px, 15px 100%, calc(100% - 15px) 100%, 100% 25px, 100% 15px, calc(100% - 15px) 0)",
				}}
			>
				<div
					className={clsx(
						"h-full w-full",
						isLoaded ? "bg-cyan-300" : "bg-orange-300",
					)}
					style={{
						clipPath:
							"polygon(15px 4px, 4px 15px, 4px 25px, 20px calc(100% - 4px), calc(100% - 20px) calc(100% - 4px), calc(100% - 4px) 25px, calc(100% - 4px) 15px, calc(100% - 15px) 4px)",
					}}
				></div>
			</div>
		</div>
	);
};
