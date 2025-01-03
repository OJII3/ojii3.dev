"use client";

import { Link, Text } from "@chakra-ui/react";
import { motion, useInView } from "motion/react";
import { type ReactNode, useRef } from "react";

export const AnimatedLink = ({
	href,
	label,
	icon,
	delay,
}: {
	href: string;
	label: string;
	icon: ReactNode;
	delay: number;
}) => {
	const ref = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref);

	return (
		<motion.div
			ref={ref}
			style={{
				opacity: isInView ? 1 : 0,
				translateX: isInView ? 0 : 40,
				transitionDelay: `${delay}s`,
				transitionDuration: "0.3s",
			}}
		>
			<Link
				href={href}
				display="flex"
				fontFamily="orbitron"
				gap="3"
				padding="2"
				letterSpacing="0.05em"
				fontSize="sm"
				color="white"
				pos="relative"
				target="_blank"
				rel="noopener noreferrer"
				_after={{
					content: "''",
					pos: "absolute",
					display: "block",
					width: "1",
					height: "full",
					left: "-2",
					top: "50%",
					transform: "translateY(-50%)",
					bg: "transparent",
					transition: "0.2s",
				}}
				_hover={{
					textShadow: "0 0 5px orange",
					_after: {
						bg: "orange",
					},
				}}
			>
				{icon}
				{label}
			</Link>
		</motion.div>
	);
};
