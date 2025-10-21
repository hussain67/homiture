import NavLinks from "./NavLinks";

function MobileNavbar({ showMobileNav, setShowMobileNav }: { showMobileNav: boolean; setShowMobileNav: React.Dispatch<React.SetStateAction<boolean>> }) {
	return (
		<div className={`w-[200px] bg-muted opacity-95 absolute h-screen top-0  z-10 text-end ${showMobileNav ? "left-[0px]" : "-left-[200px]"} transition-all duration-1000 `}>
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
