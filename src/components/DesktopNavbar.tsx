import CartButton from "./CartButton";
import NavLinks from "./NavLinks";
function DesktopNavbar() {
	return (
		<nav className="hidden md:flex items-center justify-between  py-5 px-5  bg-muted ">
			<ul className="hidden md:flex gap-5 ml-auto items-center ">
				<NavLinks />
			</ul>
			<ul className="ml-auto">
				<CartButton />
			</ul>
		</nav>
	);
}

export default DesktopNavbar;
