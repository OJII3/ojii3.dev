import { createFileRoute } from "@tanstack/react-router";
import { LuCircleCheck } from "react-icons/lu";
import { Drawer } from "@/components/Drawer";
import { LinkCard } from "@/components/LinkCard";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<div className="min-h-dvh w-screen">
			<Drawer />
			<main className="mx-auto max-w-200 p-4">
				<div className="py-20">
					<h1 className="font-tektur text-6xl">Hello! I am OJII3.</h1>
					<p className="mt-8 font-tektur text-secondary-content">
						Japanese University Student.
					</p>
					<p className="mt-4 font-tektur text-secondary-content">
						Interested in Game Frontend (Unity) & Web Frontend (React).
					</p>
					<p className="mt-4 font-tektur text-secondary-content">
						A fan of Nix & Neovim. Sometimes enjoy modeling with Blender.
					</p>
				</div>
				<section>
					<h2 className="font-tektur text-3xl">Links</h2>
					<div className="mx-auto mt-12 grid w-[320px] grid-flow-col grid-cols-2 grid-rows-3 gap-8 md:w-full md:grid-flow-row md:grid-cols-4 md:grid-rows-2">
						<LinkCard
							label="Blog"
							to="https://blog.ojii3.dev"
							variant="secondary"
							external
						/>

						<LinkCard
							label="AtCoder"
							to="https://atcoder.jp/users/OJII3"
							variant="secondary"
							external
						/>

						<LinkCard
							label="GitHub"
							to="https://github.com/ojii3"
							variant="secondary"
							external
						/>

						<LinkCard
							label="X"
							to="https://x.com/ojii3dev"
							variant="primary"
							external
						/>

						<LinkCard
							label="Pixiv"
							to="https://www.pixiv.net/users/91784105"
							variant="primary"
							external
						/>
					</div>
				</section>
				<section className="mt-20">
					<h2 className="font-tektur text-2xl">The way I went through</h2>
					<ul className="timeline timeline-vertical my-4">
						<li>
							<div className="timeline-start">
								<LuCircleCheck />
							</div>
							<div className="timeline-middle timeline-box">
								First Macintosh computer
							</div>
							<hr />
						</li>
						<li>
							<hr />
							<div className="timeline-start">
								<LuCircleCheck />
							</div>
							<div className="timeline-middle timeline-box">iMac</div>
							<hr />
						</li>
						<li>
							<hr />
							<div className="timeline-start">
								<LuCircleCheck />
							</div>
							<div className="timeline-middle timeline-box">iPod</div>
							<hr />
						</li>
						<li>
							<hr />
							<div className="timeline-start">
								<LuCircleCheck />
							</div>
							<hr />
						</li>
						<li>
							<hr />
							<div className="timeline-start">
								<LuCircleCheck />
							</div>
							<div className="timeline-middle timeline-box">Apple Watch</div>
						</li>
					</ul>
				</section>
			</main>
		</div>
	);
}
