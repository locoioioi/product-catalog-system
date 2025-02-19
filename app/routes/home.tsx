import { Outlet } from "react-router";
import Footer from "~/components/utils/Footer";
import Header from "~/components/utils/Header";

export default function Home() {
	return (
		<div className="flex flex-col h-dvh">
			<Header />
			<div className="flex-1">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
}
