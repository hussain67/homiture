import { Outlet } from "react-router-dom";
import HeaderContainer from "./header-container/HeaderContainer";

function AppLayout() {
	return (
		<main className="align-content flex flex-col gap-6">
			<HeaderContainer />
			<Outlet />
		</main>
	);
}

export default AppLayout;
