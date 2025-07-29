import { Link } from "@tanstack/react-router";
import type { ComponentPropsWithoutRef, FC } from "react";
import { Card } from "./Card";

type Props = ComponentPropsWithoutRef<typeof Card> & {
	external?: boolean;
	to: string;
};

export const LinkCard: FC<Props> = ({ to, external, ...props }) => {
	if (external)
		return (
			<a
				href={to}
				target="_blank"
				rel="noopener noreferrer"
				aria-label={props.label}
				className="inline-block"
			>
				<Card {...props} />
			</a>
		);
	else
		return (
			<Link to={to} aria-label={props.label}>
				<Card {...props} />
			</Link>
		);
};
