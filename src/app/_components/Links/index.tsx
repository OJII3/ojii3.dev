import { Button } from "@/components/ui/button";
import {
	DrawerBackdrop,
	DrawerCloseTrigger,
	DrawerContent,
	DrawerHeader,
	DrawerRoot,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { Link } from "@chakra-ui/react";
import { BsGithub, BsTwitterX } from "react-icons/bs";
import { LuLink, LuMenu } from "react-icons/lu";
import { SiPixiv } from "react-icons/si";

const links = [
	{
		href: "https://x.com/ojii3dev",
		label: "TwitterX",
		icon: <BsTwitterX />,
	},
	{
		href: "https://github.com/ojii3",
		label: "GitHub",
		icon: <BsGithub />,
	},
	{
		href: "https://pixiv.net/users/12345678",
		icon: <SiPixiv />,
		label: "Pixiv",
	},
];

export const Links = () => {
	return (
		<>
			<DrawerRoot>
				<DrawerBackdrop />
				<DrawerTrigger asChild pos="fixed" top="1" right="1">
					<Button
						colorPalette="orange"
						clipPath="polygon(0 0, 0 calc(100% - 14px), 14px 100%, 100% 100%, 100% 0)"
						borderRadius="0"
						pr="2"
					>
						<LuMenu />
					</Button>
				</DrawerTrigger>
				<DrawerContent
					clipPath="polygon(0 0, 0 30%, 40px calc(30% + 40px), 40px calc(100% - 160px), 0 calc(100% - 120px), 0 100%, 100% 100%, 100% 0)"
					pl="12"
				>
					<DrawerHeader>
						<DrawerTitle>Links</DrawerTitle>
					</DrawerHeader>
					{links.map((link) => (
						<Link key={link.href} href={link.href}>
							{link.icon}
							{link.label}
						</Link>
					))}
					<DrawerCloseTrigger />
				</DrawerContent>
			</DrawerRoot>
		</>
	);
};
