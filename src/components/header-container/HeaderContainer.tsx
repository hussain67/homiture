import { useState } from "react";
import HeaderActions from "./HeaderActions";
import MobileNavbar from "./MobileNavbar";
import MenuToggle from "./MenuToggle";
import Logo from "./Logo";
import DesktopNavbar from "./DesktopNavbar";

function HeaderContainer() {
	const [showMobileNav, setShowMobileNav] = useState(false);
	return (
		<section>
			<div className="flex justify-between items-center p-2">
				<MobileNavbar
					showMobileNav={showMobileNav}
					setShowMobileNav={setShowMobileNav}
				/>
				<MenuToggle setShowMobileNav={setShowMobileNav} />
				<Logo />

				<HeaderActions />
			</div>
			<div>
				<DesktopNavbar />
			</div>
		</section>
	);
}

export default HeaderContainer;
