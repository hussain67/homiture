import { NavLink } from "react-router-dom";

function NavLinks() {
	const links = [
		{ id: 1, path: "/", text: "home" },
		{ id: 2, path: "about", text: "about" },
		{ id: 3, path: "products", text: "products" },
		{ id: 4, path: "cart", text: "cart" },
		{ id: 5, path: "checkout", text: "checkout" },
		{ id: 6, path: "orders", text: "orders" }
	];
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
