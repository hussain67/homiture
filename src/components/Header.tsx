import { setTheme } from "@/features/theme/themeSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { NavLink } from "react-router-dom";
import { FaRegMoon } from "react-icons/fa6";
import { IoSunnyOutline } from "react-icons/io5";
import type { Theme } from "@/types/themeTypes";
function Header() {
	const { theme } = useAppSelector(state => state.themeState);

	const dispatch = useAppDispatch();

	//Handle dispatch

	function handleDispatch(theme: Theme) {
		dispatch(setTheme(theme));
	}
	console.log(theme);
	return (
		<section className="flex gap-6 justify-end items-center">
			<div className="flex items-center text-2xl">
				{theme === "dark" && (
					<button
						className="cursor-pointer"
						onClick={() => handleDispatch("light")}
					>
						{" "}
						<IoSunnyOutline />
					</button>
				)}
				{theme === "light" && (
					<button
						className="cursor-pointer"
						onClick={() => handleDispatch("dark")}
					>
						<FaRegMoon />{" "}
					</button>
				)}
			</div>
			<div className="flex gap-6">
				<NavLink to="/login">Login</NavLink>
				<NavLink to="/register">Register</NavLink>
			</div>
		</section>
	);
}

export default Header;
