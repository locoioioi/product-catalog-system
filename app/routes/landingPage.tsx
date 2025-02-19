import type { FC } from "react";
import HeroSection from "~/components/landing/HeroSection";
import { Button } from "~/components/ui/button";

const LandingPage: FC = () => {
	return (
		<div className="max-w-[1200px] m-auto">
			<HeroSection
				key={1}
				header="Better clothing for the planet"
				content="Create screens directly in Method or add your images from Sketch or
					Figma. You can even sync designs from your cloud storage!"
			/>

			<div className="mt-8 flex items-center justify-center mb-8">
				<img src="/assets/banner.jpg" className="w-[90%]" />
			</div>

			<div className="flex justify-center items-center gap-6">
				<img src="assets/image5.png" alt="logo" height={34} width={200} />
				<img src="assets/image6.png" alt="logo" />
				<img src="assets/image7.png" alt="logo" />
				<img src="assets/image8.png" alt="logo" />
			</div>

			<HeroSection
				key={2}
				header="Our latest arrivals"
				content="Create screens directly in Method or add your images from Sketch or
					Figma. You can even sync designs from your cloud storage!"
			/>

			<div className="mt-8 flex items-center justify-center mb-8 gap-6">
				<img
					src="/assets/release1.jpg"
					className="mt-44 object-contain"
					width={368}
					height={521}
				/>
				<img
					src="/assets/release2.jpg"
					className=" object-contain"
					width={368}
					height={521}
				/>
				<img
					src="/assets/release3.jpg"
					className=" mt-44 object-contain"
					width={368}
					height={521}
				/>
			</div>
		</div>
	);
};

export default LandingPage;
