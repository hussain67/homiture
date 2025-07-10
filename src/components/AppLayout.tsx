import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";

function AppLayout() {
	return (
		<main className="align-content flex flex-col gap-6">
			<Header />
			<Navbar />
			<Outlet />
		</main>
	);
}

export default AppLayout;
