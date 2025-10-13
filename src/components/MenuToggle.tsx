import { FaBars } from "react-icons/fa6";

function MenuToggle({ setShowMobileNav }: { setShowMobileNav: React.Dispatch<React.SetStateAction<boolean>> }) {
	return (
		<button
			className="md:hidden cursor-pointer"
			onClick={() => setShowMobileNav(true)}
		>
			{<FaBars />}
		</button>
	);
}

export default MenuToggle;
