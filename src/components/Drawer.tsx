import type { FC } from "react";
import { LuMenu } from "react-icons/lu";
import { ReactSVG } from "react-svg";
import MayYouTheBeauty from "../assets/may_you_the_beaty.svg";

const drawerId = "global-menu-drawer";

export const Drawer: FC = () => {
	return (
		<div className="drawer">
			<input id={drawerId} type="checkbox" className="drawer-toggle" />
			<div className="drawer-content">
				<label
					htmlFor={drawerId}
					className="btn btn-primary drawer-button fixed top-2 left-2 z-10 p-4 px-2"
					aria-label="toggle sidebar"
				>
					<LuMenu className="h-8 w-8" />
				</label>
			</div>
			<div className="drawer-side">
				<label
					htmlFor={drawerId}
					aria-label="close sidebar"
					className="drawer-overlay"
				></label>
				<div
					className="menu min-h-full w-80 bg-base-200 p-4 text-base-content"
					style={{
						clipPath: `polygon(100% 0px, 100% 30%, calc(100% - 40px) calc(30% + 40px), calc(100% - 40px) calc(100% - 160px), 100% calc(100% - 120px), 100% 100%, 0px 100%, 0px 0px)`,
					}}
				>
					<div className="absolute top-4 bottom-0 overflow-hidden">
						<ReactSVG
							className="text-slate-500 opacity-10"
							src={MayYouTheBeauty}
						/>
					</div>
					<h2 className="font-tektur text-2xl">Menu</h2>
					<ul className="pt-12">
						<li className="list">Home</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
