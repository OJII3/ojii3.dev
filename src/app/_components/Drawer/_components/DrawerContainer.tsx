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
import { Box, DrawerActionTrigger, Flex, IconButton } from "@chakra-ui/react";
import { BsBook, BsCode, BsGithub, BsTwitterX } from "react-icons/bs";
import { LuMenu } from "react-icons/lu";

import DiagonalSlash from "@/assets/diagonal_slash.svg";
import DiagonalWindow from "@/assets/diagonal_window.svg";
import ForKiana from "@/assets/may_you_the_beauty.svg";
import Honkai3rd from "@/assets/valkyrie.svg";
import { IoClose } from "react-icons/io5";
import { AnimatedLink } from "./AnimatedLink";
import { AnimatedVerticalBar } from "./AnimatedVerticalBar";

const links = [
	{
		href: "https://x.com/ojii3dev",
		label: "TwitterX",
		icon: <BsTwitterX size="22" />,
	},
	{
		href: "https://github.com/ojii3",
		label: "GitHub",
		icon: <BsGithub size="22" />,
	},
	{
		href: "https://atcoder.jp/users/ojii3",
		icon: <BsCode size="22" />,
		label: "AtCoder",
	},
	{
		href: "https://honkaiimpact3.hoyoverse.com",
		icon: <Honkai3rd />,
		label: "Honkai Impact 3rd",
	},
	{
		href: "https://blog.ojii3.dev",
		icon: <BsBook size="22" />,
		label: "Blog",
	},
];

export const DrawerContainer = () => {
	return (
		<>
			<DrawerRoot size="xs">
				<DrawerBackdrop />
				<DrawerTrigger asChild>
					<Button
						pos="fixed"
						top="2"
						right="2"
						bg="orange"
						h="auto"
						p="1"
						color="gray.900"
						shadow="xs"
					>
						<Box
							shadow="xs"
							h="6"
							w="8"
							bg="gray.200"
							pl="3"
							pr="2"
							clipPath="polygon(0 0, 0 calc(100% - 14px), 14px 100%, 100% 100%, 100% 0)"
							color="gray.700"
						>
							<LuMenu />
						</Box>
					</Button>
				</DrawerTrigger>

				<DrawerContent
					clipPath="polygon(0 0, 0 30%, 40px calc(30% + 40px), 40px calc(100% - 160px), 0 calc(100% - 120px), 0 100%, 100% 100%, 100% 0)"
					pl="12"
					bg="gray.800"
					color="gray.100"
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
						right="8"
						opacity="10%"
						zIndex="-1"
						h="100%"
					>
						<ForKiana />
					</Box>
					<AnimatedVerticalBar />
					<Box
						pos="absolute"
						bottom="9"
						left="20"
						maxH="30%"
						color="orange"
						zIndex="-1"
					>
						<DiagonalWindow />
					</Box>

					<DrawerActionTrigger asChild>
						<IconButton bg="transparent" pos="absolute" right="2" top="2">
							<IoClose />
						</IconButton>
					</DrawerActionTrigger>

					<DrawerHeader>
						<Box
							pos="absolute"
							top="0"
							left="10"
							h="16"
							w="44"
							bg="orange"
							zIndex="-1"
							clipPath="polygon(0 0, 0 calc(100% - 24px), 24px 100%, calc(100% - var(--chakra-spacing-16)) 100%, 100% 0)"
						/>
						<DrawerTitle
							fontFamily="orbitron"
							letterSpacing="0.1em"
							color="gray.700"
						>
							Links
						</DrawerTitle>
					</DrawerHeader>
					<DrawerBody
						as={Flex}
						gap="3"
						flexDir="column"
						pt="12"
						overflowX="hidden"
					>
						{links.map((link, i) => (
							<AnimatedLink
								key={link.href}
								href={link.href}
								icon={link.icon}
								label={link.label}
								delay={(i + 0.05) * 0.1}
							/>
						))}
					</DrawerBody>
				</DrawerContent>
			</DrawerRoot>
		</>
	);
};
