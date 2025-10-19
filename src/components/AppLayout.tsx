import { Outlet } from "react-router-dom";
import HeaderContainer from "./header-container/HeaderContainer";
import ProductSearch from "./forms/Search";

function AppLayout() {
	return (
		<main className="align-content flex flex-col min-h-screen gap-6">
			<HeaderContainer />
			<div className="block md:hidden">
				<ProductSearch />
			</div>

			<Outlet />
		</main>
	);
}

export default AppLayout;
