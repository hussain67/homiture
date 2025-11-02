import { NavLink } from "react-router-dom";

type NavLinksProps = {
	setShowMobileNav?: React.Dispatch<React.SetStateAction<boolean>>;
};
function NavLinks({ setShowMobileNav }: NavLinksProps) {
	const links = [
		{ id: 1, path: "/", text: "home" },
		{ id: 2, path: "about", text: "about" },
		{ id: 3, path: "products", text: "products" },

		{ id: 4, path: "orders", text: "orders" }
	];
	function handleClick() {
		if (setShowMobileNav) {
			setShowMobileNav(false);
		}
	}
	return (
		<>
			{links.map(link => {
				const { id, path, text } = link;
				return (
					<li
						key={id}
						className="list-none"
					>
						<NavLink
							to={path}
							className={({ isActive }) => `px-3 py-2 capitalize rounded-md transition-all ${isActive ? "bg-blue-400 text-white" : " hover:bg-background"}`}
							onClick={handleClick}
						>
							{text}
						</NavLink>
					</li>
				);
			})}
		</>
	);
}

export default NavLinks;
