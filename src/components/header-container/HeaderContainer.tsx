import { useState } from "react";
import HeaderActions from "./HeaderActions";
import MobileNavbar from "./MobileNavbar";
import MenuToggle from "./MenuToggle";
import Logo from "./Logo";
import DesktopNavbar from "./DesktopNavbar";
import Search from "../forms/Search";

function HeaderContainer() {
	const [showMobileNav, setShowMobileNav] = useState(false);
	return (
		<section className="bg-muted rounded-sm  ">
			<div className="flex justify-between  items-center p-3 border-b-2 border-silver-200">
				{/* Absolute component */}
				<MobileNavbar
					showMobileNav={showMobileNav}
					setShowMobileNav={setShowMobileNav}
				/>
				{/* Shown md:hidden */}
				<MenuToggle setShowMobileNav={setShowMobileNav} />

				{/* Hidden md:Shown */}
				<Logo />

				{/* Hidden md:Shown */}
				<div className="hidden md:block">
					<Search />
				</div>
				<HeaderActions />
			</div>
			<div>
				{/* hidden md:shown */}
				<DesktopNavbar />
			</div>
		</section>
	);
}

export default HeaderContainer;
