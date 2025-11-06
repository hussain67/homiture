import NavLinks from "./NavLinks";

function MobileNavbar({ showMobileNav, setShowMobileNav }: { showMobileNav: boolean; setShowMobileNav: React.Dispatch<React.SetStateAction<boolean>> }) {
	return (
		<div className={`fixed w-[200px] bg-muted h-screen top-0  left-0 text-end z-10 ${showMobileNav ? "translate-x-0 opacity-95" : "-translate-x-full opacity-0"} transition-all duration-1000 `}>
			<button
				onClick={() => setShowMobileNav(false)}
				className="mt-2 mr-3 cursor-pointer"
			>
				<span className="">❌ </span>
			</button>
			<div className="flex items-start flex-col gap-6 ml-5">
				<NavLinks setShowMobileNav={setShowMobileNav} />
			</div>
		</div>
	);
}

export default MobileNavbar;
