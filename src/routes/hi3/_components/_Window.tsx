import clsx from "clsx";
import type { FC } from "react";

type Props = {
	isLoaded?: boolean;
};

export const Window: FC<Props> = ({ isLoaded }) => {
	return (
		<div
			className="relative col-[2/3] row-[2/3] m-auto h-win w-win overflow-hidden drop-shadow-lg"
			style={{
				clipPath:
					"polygon(40px 0, 0 40px, 0 calc(100% - 40px), 40px 100%, calc(100% - 40px) 100%, 100% calc(100% - 40px), 100% calc(100% - 40px), 100% 40px, calc(100% - 40px) 0)",
			}}
		>
			{/* left-up window ############################ */}
			<div
				className={clsx(
					"-skew-y-[45deg] -top-miniwin-half relative h-miniwin w-miniwin delay-200 duration-700",
					isLoaded && "-translate-y-miniwin",
				)}
				style={{
					clipPath: "polygon(0 0, 0 100%, 100% 100%)",
				}}
			>
				<div className="absolute top-0 left-0 h-full w-14 bg-gray-500" />
				<div className="absolute bottom-0 h-20 w-full bg-gray-500" />

				<div className="absolute bottom-4 h-14 w-full bg-gray-600" />
				<div className="absolute top-0 left-0 h-full w-12 bg-gray-600" />

				<div className="absolute bottom-1 h-1 w-full bg-slate-800" />
			</div>
			{/* right-down window ######################## */}
			<div
				className={clsx(
					"-mt-miniwin relative h-full delay-200 duration-700",
					isLoaded && "translate-y-win",
				)}
			>
				<div className="-skew-y-[45deg] absolute top-miniwin-half h-win w-miniwin">
					<div className="absolute top-0 left-0 h-full w-14 bg-gray-500" />
					<div className="absolute top-0 h-20 w-full bg-gray-500" />

					<div className="absolute top-4 h-14 w-full bg-gray-600" />
					<div className="absolute top-0 left-0 h-full w-12 bg-gray-600" />

					<div className="absolute top-1 h-1 w-full bg-slate-800" />
				</div>
				<div className="absolute top-0 right-0 h-full w-[calc(var(--spacing-win)-var(--spacing-miniwin))]">
					<div className="absolute top-0 h-20 w-full bg-gray-500" />
					<div className="absolute top-0 right-0 h-full w-14 bg-gray-500" />

					<div className="absolute top-4 h-14 w-full bg-gray-600" />

					<div className="absolute top-1 h-1 w-full bg-slate-800" />
				</div>
			</div>
		</div>
	);
};
