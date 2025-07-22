import { useAppSelector } from "@/hooks";
import { NavLink } from "react-router-dom";

function Header() {
	const { theme } = useAppSelector(state => state.themeState);
	console.log(theme);
	return (
		<div className="flex justify-end gap-6">
			<NavLink to="/login">Login</NavLink>
			<NavLink to="/register">Register</NavLink>
		</div>
	);
}

export default Header;
