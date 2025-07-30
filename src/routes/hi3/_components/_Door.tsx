import clsx from "clsx";
import type { FC } from "react";

type Props = {
	isLoaded?: boolean;
};

export const Door: FC<Props> = ({ isLoaded }) => {
	return (
		<div
			className={clsx(
				"relative col-[2/3] row-[2/3] m-auto h-door w-door drop-shadow-lg delay-300 duration-500",
				isLoaded && "-translate-x-door",
			)}
			style={{
				clipPath:
					"polygon(40px 0, 0 40px, 0 calc(100% - 40px), 40px 100%, calc(100% - 40px) 100%, 100% calc(100% - 40px), 100% calc(100% - 40px), 100% 40px, calc(100% - 40px) 0)",
			}}
		>
			<div className="absolute top-0 left-0 h-full w-12 bg-gray-400" />
			<div className="absolute top-0 right-0 h-full w-12 bg-gray-400" />
			<div className="absolute bottom-0 h-12 w-full bg-gray-400" />
			<div className="absolute top-0 left-0 h-12 w-full bg-gray-400" />

			<div className="absolute top-1/2 left-0 grid h-24 w-full place-content-center bg-gray-400">
				<div
					className="h-18 w-[calc(var(--spacing-door)-160px)] bg-slate-800"
					style={{
						clipPath:
							"polygon(0 0, 0 calc(100% - 40px), 40px 100%, 100% 100%, 100% 100%, 100% calc(100% - 40px), 100% 40px, calc(100% - 40px) 0)",
					}}
				/>
			</div>

			<div className="absolute top-0 left-1/2 h-32 w-full rotate-45 bg-gray-400" />
			<div className="-rotate-45 absolute top-0 right-1/2 h-24 w-full bg-gray-400" />
			<div className="-rotate-45 absolute bottom-0 left-1/2 h-24 w-full bg-gray-400" />
			<div className="absolute right-1/2 bottom-0 h-24 w-full rotate-45 bg-gray4300" />

			<div
				className="absolute top-8 right-0 h-12 w-1/2 bg-gray-400"
				style={{
					clipPath:
						"polygon(0 0, 0 calc(100% - 40px), 40px 100%, 100% 100%, 100% 0)",
				}}
			/>

			<div className="absolute top-16 right-0 h-2 w-1/3 border-2 border-gray-400 bg-primary" />

			<div className="absolute top-6 right-16 h-8 w-8 rounded-full bg-red-950 shadow-inner" />
		</div>
	);
};
