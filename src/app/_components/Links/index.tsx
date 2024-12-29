import {
	Center,
	Container,
	Flex,
	IconButton,
	Link,
	MenuContent,
	MenuItem,
	MenuRoot,
	MenuTrigger,
} from "@chakra-ui/react";
import { BsTwitterX } from "react-icons/bs";
import { LuLink } from "react-icons/lu";

export const Links = () => {
	return (
		<Container pos="fixed" top="0">
			<MenuRoot positioning={{ placement: "bottom-start" }}>
				<MenuTrigger>
					<IconButton>
						<LuLink />
					</IconButton>
				</MenuTrigger>
				<MenuContent>
					<MenuItem value="">
						<Link href="https://x.com/ojii3dev">
							<BsTwitterX />
						</Link>
					</MenuItem>
				</MenuContent>
			</MenuRoot>
		</Container>
	);
};
