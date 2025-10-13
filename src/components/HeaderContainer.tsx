import { useState } from "react";
import Header from "./Header";
import MobileNavbar from "./MobileNavbar";
import MenuToggle from "./MenuToggle";
import Logo from "./Logo";
import CartButton from "./CartButton";

function HeaderContainer() {
	const [showMobileNav, setShowMobileNav] = useState(false);
	return (
		<div className="flex justify-between items-center p-2">
			<MobileNavbar
				showMobileNav={showMobileNav}
				setShowMobileNav={setShowMobileNav}
			/>
			<MenuToggle setShowMobileNav={setShowMobileNav} />
			<Logo />
			<Header />
			<div className="md:hidden">
				<CartButton />
			</div>
		</div>
	);
}

export default HeaderContainer;
