import NavLinks from "./NavLinks";
function DesktopNavbar() {
	return (
		<nav className="hidden md:flex items-center justify-center  py-3 px-5  bg-muted ">
			<ul className="hidden md:flex gap-5  items-center ">
				<NavLinks />
			</ul>
		</nav>
	);
}

export default DesktopNavbar;
