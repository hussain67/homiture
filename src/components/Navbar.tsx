import { NavLink } from "react-router-dom";

function Navbar() {
	return (
		<div className="flex gap-5 justify-center items-center py-4 bg-muted">
			<NavLink to="/home">Home</NavLink>
			<NavLink to="/about">About</NavLink>
			<NavLink to="/products">Products</NavLink>
			<NavLink to="/cart">Cart</NavLink>
		</div>
	);
}

export default Navbar;
