import { Button } from "@/components/ui/button";
import {
	DrawerBackdrop,
	DrawerBody,
	DrawerContent,
	DrawerHeader,
	DrawerRoot,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import {
	Box,
	DrawerActionTrigger,
	DrawerCloseTrigger,
	Flex,
	IconButton,
	Link,
} from "@chakra-ui/react";
import { BsBook, BsCode, BsGithub, BsTwitterX } from "react-icons/bs";
import { LuCross, LuMenu } from "react-icons/lu";

import DiagonalSlash from "@/assets/diagonal_slash.svg";
import DiagonalWindow from "@/assets/diagonal_window.svg";
import ForKiana from "@/assets/may_you_the_beauty.svg";
import Honkai3rd from "@/assets/valkyrie.svg";
import { BiCloset } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

const links = [
	{
		href: "https://x.com/ojii3dev",
		label: "TwitterX",
		icon: <BsTwitterX size="28" />,
	},
	{
		href: "https://github.com/ojii3",
		label: "GitHub",
		icon: <BsGithub size="28" />,
	},
	{
		href: "https://atcoder.jp/users/ojii3",
		icon: <BsCode size="28" />,
		label: "AtCoder",
	},
	{
		href: "https://honkaiimpact3.hoyoverse.com",
		icon: <Honkai3rd />,
		label: "Honkai Impact 3rd",
	},
	{
		href: "https://blog.ojii3.dev",
		icon: <BsBook size="28" />,
		label: "Blog",
	},
];

export const Links = () => {
	return (
		<>
			<DrawerRoot size="sm">
				<DrawerBackdrop />
				<DrawerTrigger asChild>
					<Button
						pos="fixed"
						top="2"
						right="2"
						colorPalette="black"
						h="auto"
						p="1"
					>
						<Box
							h="6"
							w="8"
							bg="orange"
							pl="3"
							pr="2"
							clipPath="polygon(0 0, 0 calc(100% - 14px), 14px 100%, 100% 100%, 100% 0)"
							color="black"
						>
							<LuMenu />
						</Box>
					</Button>
				</DrawerTrigger>
				<DrawerContent
					clipPath="polygon(0 0, 0 30%, 40px calc(30% + 40px), 40px calc(100% - 160px), 0 calc(100% - 120px), 0 100%, 100% 100%, 100% 0)"
					pl="16"
					bg="gray.800"
					color="white"
				>
					<Box pos="absolute" left="4" zIndex="-1" color="orange">
						<Box h="16vh" w="1" bg="orange" />
						<Box mt="-2">
							<DiagonalSlash />
						</Box>
					</Box>

					<Box
						pos="absolute"
						top="4"
						bottom="-12px"
						color="gray.500"
						right="16"
						opacity="10%"
					>
						<ForKiana />
					</Box>
					<Box
						pos="absolute"
						bottom="6"
						right="8"
						w="2"
						h="7/12"
						borderRadius="md"
						bg="orange"
						zIndex="-1"
					/>
					<Box pos="absolute" bottom="9" left="20" color="orange" zIndex="-1">
						<DiagonalWindow />
					</Box>

					<DrawerActionTrigger asChild>
						<IconButton colorPalette="white" pos="absolute" right="4" top="4">
							<IoClose />
						</IconButton>
					</DrawerActionTrigger>

					<DrawerHeader>
						<DrawerTitle fontFamily="orbitron" letterSpacing="0.1em">
							Links
						</DrawerTitle>
					</DrawerHeader>
					<DrawerBody as={Flex} flexDir="column" gap="2">
						{links.map((link) => (
							<Link
								gap="3"
								_hover={{
									bg: "gray.700",
									borderRadius: "md",
								}}
								fontFamily="orbitron"
								letterSpacing="0.05em"
								key={link.href}
								href={link.href}
								p="2"
								color="white"
								fontSize="md"
							>
								{link.icon}
								{link.label}
							</Link>
						))}
					</DrawerBody>
				</DrawerContent>
			</DrawerRoot>
		</>
	);
};
