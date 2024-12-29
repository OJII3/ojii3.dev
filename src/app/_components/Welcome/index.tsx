import { Badge, Center, Flex, Heading } from "@chakra-ui/react";
import { FcDown } from "react-icons/fc";

export const Welcome = () => {
	return (
		<Center minH="dvh" flexDir="column" gap="4">
			<Heading>
				Hello, I'm OJII3{" "}
				<Badge colorPalette="red" size="xs">
					New
				</Badge>
			</Heading>
			TODO: ここに何か書く
			<Flex alignItems="center">
				Scroll down <FcDown />
			</Flex>
		</Center>
	);
};
