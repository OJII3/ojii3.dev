import { createFileRoute } from "@tanstack/react-router";
import { Drawer } from "@/components/Drawer";
import { LinkCard } from "@/components/LinkCard";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<div className="min-h-dvh w-screen">
			<Drawer />
			<main className="mx-auto flex max-w-200 flex-col gap-20 p-4">
				<section className="pt-28">
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
				</section>
				<section>
					<h2 className="font-bold font-tektur text-2xl">Links</h2>
					<hr className="h-[1px] w-full border-0 bg-primary drop-shadow-bloom drop-shadow-primary" />
					<div className="mx-auto mt-12 grid w-[336px] grid-flow-col grid-cols-2 grid-rows-3 gap-x-12 gap-y-8 md:w-full md:grid-flow-row md:grid-cols-4 md:grid-rows-2">
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
				<section>
					<h2 className="font-bold font-tektur text-2xl">
						The way I went through
					</h2>
					<hr className="h-[1px] w-full border-0 bg-primary drop-shadow-bloom drop-shadow-primary" />
					<ul className="timeline timeline-vertical mt-8">
						<li>
							<div className="timeline-start">2022/04</div>
							<div className="timeline-middle"></div>
							<div className="timeline-end timeline-box border-primary">
								東京農工大学 工学部 機械システム工学科 入学
							</div>
							<hr className="bg-primary" />
						</li>
						<li>
							<hr className="bg-primary" />
							<div className="timeline-start">2024/03</div>
							<div className="timeline-middle"></div>
							<div className="timeline-end timeline-box border-primary">
								東京農工大学 工学部 機械システム工学科 中退
							</div>
							<hr className="bg-primary" />
						</li>
						<li>
							<hr className="bg-primary" />
							<div className="timeline-start">2024/04</div>
							<div className="timeline-middle"></div>
							<div className="timeline-end timeline-box border-primary">
								東京農工大学 工学部 知能情報システム工学科 入学
							</div>
							<hr className="bg-primary" />
						</li>
						<li>
							<hr className="bg-primary" />
							<div className="timeline-start">2024/04</div>
							<div className="timeline-middle"></div>
							<div className="timeline-end timeline-box border-primary">
								マイクロコンピュータークラブ部長 就任
							</div>
							<hr className="bg-primary" />
						</li>
						<li>
							<hr className="bg-primary" />
							<div className="timeline-start">2024/06</div>
							<div className="timeline-middle"></div>
							<div className="timeline-end timeline-box border-primary">
								NHK学生ロボコン2024 準決勝進出
							</div>
							<hr className="bg-primary" />
						</li>
						<li>
							<hr className="bg-primary" />
							<div className="timeline-start">2024/08</div>
							<div className="timeline-middle"></div>
							<div className="timeline-end timeline-box border-primary">
								技育博 vol2 出場 (Avoid Game を出展)
							</div>
							<hr className="bg-primary" />
						</li>
						<li>
							<hr className="bg-primary" />
							<div className="timeline-start">2024/08</div>
							<div className="timeline-middle"></div>
							<div className="timeline-end timeline-box border-primary">
								Hack U Tokyo 2024 出場 (Who is? を制作)
							</div>
							<hr className="bg-primary" />
						</li>
						<li>
							<hr className="bg-primary" />
							<div className="timeline-start">2024/10</div>
							<div className="timeline-middle"></div>
							<div className="timeline-end timeline-box border-primary">
								技育展 2024 決勝大会出場 (Who is? を出展)
							</div>
						</li>
					</ul>
				</section>
			</main>
		</div>
	);
}
