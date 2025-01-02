"use client";

import { motion } from "motion/react";

export const AnimatedVerticalBar = () => {
	return (
		<motion.div
			style={{
				position: "absolute",
				bottom: "1.5rem",
				right: "2rem",
				width: "0.25rem",
				height: "60%",
				zIndex: -1,
				borderRadius: "20px",
				backgroundColor: "orange",
			}}
		/>
	);
};
