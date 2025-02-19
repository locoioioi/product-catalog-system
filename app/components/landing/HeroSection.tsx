import type { FC } from "react";
import { Button } from "../ui/button";

interface HeroProps {
	header: string;
	content: string;
}

const HeroSection: FC<HeroProps> = ({ header, content }) => {
	return (
		<div className="flex flex-col items-center justify-between mt-16 gap-5">
			<h1 className="heading-2">{header}</h1>

			<p
				className="w-6/12 text-center paragraph-1"
				style={{
					color: "var(--color-text-secondary)"
				}}
			>
				{content}
			</p>

			<Button
				variant={"outline"}
				className="px-12 py-5 border-black font-semibold cursor-pointer"
			>
				Shop All
			</Button>
		</div>
	);
};

export default HeroSection;
