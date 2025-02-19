import type { FC } from "react";
import Navbar from "./Navbar";
import AnnouncementBar from "./AnnouncementBar";

const Header: FC = () => {
	return (
		<div>
			<AnnouncementBar />
			<Navbar />
		</div>
	);
};

export default Header;
