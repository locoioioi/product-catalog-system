import type { FC } from "react";

const Banner: FC = () => {
	return (
		<div className="bg-[var(--color-bg-secondary)]">
			<div className="max-w-[1200px] m-auto pt-[34px]">
				<h1
					className="font-semibold text-[36px] text-white"
					style={{
						fontFamily: "var(--font-sans)"
					}}
				>
					Shop Men’s
				</h1>

				<p className="paragraph-2 text-white w-5/12 mt-[9px] pb-[47px]">
					Revamp your style with the latest designer trends in men’s clothing or
					achieve a perfectly curated wardrobe thanks to our line-up of timeless
					pieces.
				</p>
			</div>
		</div>
	);
};

export default Banner;
