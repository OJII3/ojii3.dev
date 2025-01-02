import { About } from "./_components/About";
import { Drawer } from "./_components/Drawer";
import { Welcome } from "./_components/Welcome";

export default function Home() {
	return (
		<>
			<main style={{ position: "relative", backgroundColor: "white" }}>
				<Welcome />
				<About />
			</main>
			<Drawer />
		</>
	);
}
