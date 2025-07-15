import { TimelineItem, TimelineRoot } from "@/components/ui/timeline";
import {
	Badge,
	Center,
	Collapsible,
	Container,
	Heading,
	TimelineConnector,
	TimelineContent,
	TimelineTitle,
} from "@chakra-ui/react";
import { LuCheck } from "react-icons/lu";

const items = [
	{ date: "2022.04", title: "東京農工大学 工学部 機械システム工学科 入学" },
	{
		date: "2022.12",
		title: "フロントエンドエンジニア長期インターンシップ",
	},
	{ date: "2024.03", title: "東京農工大学 工学部 機械システム工学科 中退" },
	{
		date: "2024.04",
		title: "東京農工大学 工学部 知能情報システム工学科 編入学",
	},
 {
  date: "2024.04",
  title: "MCC部長就任",
 },
	{
		date: "2024.06",
		title: "NHK学生ロボコン2024 準決勝進出",
	},
	{
		date: "2024.11",
		title: "技育展2024決勝大会出場",
	},
 {
  date: "2025.02",
  title: "技育博vol6 DeNA賞",
 },
];

export const About = () => {
	return (
		<Center minH="80" flexDir="column" maxW="800px" mx="auto" gap="4">
			<Heading>About Me</Heading>
			<p>Linux, Neovim, Blender, Unity, TypeScript などが好き。</p>
			<Collapsible.Root>
				<Collapsible.Trigger as={Center}>
					The tracks I left behind
				</Collapsible.Trigger>
				<Collapsible.Content p="4">
					<Container>
						<TimelineRoot>
							{items.map((item) => (
								<TimelineItem key={item.title}>
									<TimelineConnector>
										<LuCheck />
									</TimelineConnector>
									<TimelineContent>
										<TimelineTitle>
											<Badge>{item.date}</Badge>
											{item.title}
										</TimelineTitle>
									</TimelineContent>
								</TimelineItem>
							))}
						</TimelineRoot>
					</Container>
				</Collapsible.Content>
			</Collapsible.Root>
		</Center>
	);
};
