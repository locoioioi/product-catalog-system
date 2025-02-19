import type { FC } from "react";
import Navbar from "./Navbar";
import AnnouncementBar from "./AnnouncementBar";

const Header: FC = () => {
	return (
		<div className="border-b-[1px] border-black ">
			<AnnouncementBar />
			<Navbar />
		</div>
	);
};

export default Header;
