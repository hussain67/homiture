import { Outlet } from "react-router-dom";
import HeaderContainer from "./HeaderContainer";
import DesktopNavbar from "./DesktopNavbar";

function AppLayout() {
	return (
		<main className="align-content flex flex-col gap-6">
			<HeaderContainer />
			<DesktopNavbar />
			<Outlet />
		</main>
	);
}

export default AppLayout;
