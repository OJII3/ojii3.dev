import { About } from "./_components/About";
import { Links } from "./_components/Links";
import { Welcome } from "./_components/Welcome";

export default function Home() {
	return (
		<main style={{ position: "relative" }}>
			<Welcome />
			<About />
			<Links />
		</main>
	);
}
