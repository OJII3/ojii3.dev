import clsx from "clsx";
import { type FC, useMemo } from "react";

type Props = {
	variant: "primary" | "secondary";
	backgrond?: string;
	label: string;
};

const colors: Record<
	Props["variant"],
	{
		bgColor: string;
		borderColor: string;
		textColor: string;
		shadowColor: string;
	}
> = {
	primary: {
		bgColor: "bg-primary",
		borderColor: "border-primary",
		textColor: "text-primary",
		shadowColor: "drop-shadow-primary shadow-primary",
	},
	secondary: {
		bgColor: "bg-secondary",
		borderColor: "border-secondary",
		textColor: "text-secondary",
		shadowColor: "shadow-secondary drop-shadow-secondary",
	},
};

export const Card: FC<Props> = ({
	variant,
	label,
	backgrond = "bg-base-100",
}) => {
	const { bgColor, borderColor, textColor, shadowColor } = useMemo(
		() => colors[variant],
		[variant],
	);

	return (
		<div
			className={clsx(
				"relative grid h-36 w-36 place-content-center rounded-lg drop-shadow-bloom",
				shadowColor,
			)}
		>
			{/* INFO: decoratoin div ###################### */}
			<div className="absolute grid h-full w-full grid-cols-4 grid-rows-4">
				<div
					className={clsx("h-full w-full rounded rounded-tl-2xl", bgColor)}
				/>
				<div
					className={clsx(
						"col-start-4 h-full w-full rounded rounded-tr-2xl",
						bgColor,
					)}
				/>
				<div
					className={clsx(
						"row-start-4 h-full w-full rounded rounded-bl-2xl",
						bgColor,
					)}
				/>
				<div
					className={clsx(
						"col-start-4 row-start-4 h-full w-full rounded rounded-br-2xl",
						bgColor,
					)}
				/>
			</div>
			{/* INFO: content div ######################### */}
			<div
				className={clsx(
					"relative grid h-34 w-34 place-content-center rounded-2xl border-4 shadow-inset-bloom",
					borderColor,
					backgrond,
					shadowColor,
				)}
			>
				<div
					className={clsx(
						"relative h-28 w-28 rounded border p-2 shadow-both-bloom drop-shadow-bloom",
						borderColor,
						shadowColor,
					)}
				>
					<div
						className={clsx(
							"absolute right-1 bottom-1 h-8 w-8",
							bgColor,
							"[clip-path:polygon(100%_0,100%_100%,0_100%)]",
						)}
					/>
					<p className={clsx("font-tektur text-xl tracking-wider", textColor)}>
						{label}
					</p>
				</div>
			</div>
		</div>
	);
};
