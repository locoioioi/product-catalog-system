import type { FC } from "react";

const AnnouncementBar: FC = () => {
	return (
		<div className="bg-[var(--color-bg-secondary)] py-[10.5px]">
			<div className="max-w-[1200px] m-auto flex justify-between text-[var(--color-text-white)]">
				<p
					className="text-base font-medium"
					style={{
						fontFamily: "var(--font-announcement)"
					}}
				>
					USD
				</p>
				<p
					className="text-base font-medium"
					style={{
						fontFamily: "var(--font-announcement)"
					}}
				>
					FREE SHIPPING ON ALL HERMAN MILLER! FEB. 25–28.
				</p>
				<p
					className="text-base font-medium"
					style={{
						fontFamily: "var(--font-announcement)"
					}}
				>
					Support
				</p>
			</div>
		</div>
	);
};

export default AnnouncementBar;
