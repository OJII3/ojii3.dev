import { Provider } from "@/components/ui/provider";
import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import localFont from "next/font/local";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

const orbitron = Orbitron({
	weight: ["400", "700"],
	variable: "--font-orbitron",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "OJII3 HOME",
	description: "練習場",
	openGraph: {
		title: "OJII3 HOME",
		url: "https://ojii3.dev",
		images: [
			{
				url: "https://ojii3.dev/icon.png",
				width: 500,
				height: 500,
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="ja"
			suppressHydrationWarning
			style={{
				backgroundColor: "orange",
			}}
		>
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} antialiased`}
			>
				<Provider forcedTheme="light">{children}</Provider>
			</body>
		</html>
	);
}
