import { NavLink } from "react-router-dom";

function Header() {
	return (
		<div className="flex justify-end gap-6">
			<NavLink to="/login">Login</NavLink>
			<NavLink to="/register">Register</NavLink>
		</div>
	);
}

export default Header;
