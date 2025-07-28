import { setTheme } from "@/features/theme/themeSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { Link } from "react-router-dom";
import { FaRegMoon } from "react-icons/fa6";
import { IoSunnyOutline } from "react-icons/io5";
import type { Theme } from "@/types/themeTypes";
// import type { User } from "@/types/authenticationTypes";
import { logoutUser } from "@/features/user/userSlice";
import logoLight from "../assets/logo-light.png";
import logoDark from "../assets/logo-dark.png";

function Header() {
	const { theme } = useAppSelector(state => state.themeState);
	const userName = useAppSelector(state => state.userState.user?.userName);
	// console.log(userName);

	const dispatch = useAppDispatch();

	//Handle dispatch

	function handleDispatch(theme: Theme) {
		dispatch(setTheme(theme));
	}
	function handleLogout() {
		dispatch(logoutUser());
	}
	return (
		<section className="flex gap-6 justify-between items-center">
			<Link to="/">
				<img
					className="w-[52px]"
					src={theme === "dark" ? logoDark : logoLight}
					alt=""
				/>
			</Link>
			<article className="flex gap-5">
				<div>
					{userName && (
						<div className="flex gap-6 capitalize">
							<span>Hello {userName}</span>
							<button
								className="cursor-pointer"
								onClick={handleLogout}
							>
								Logout
							</button>
						</div>
					)}
					{!userName && (
						<div className="flex gap-3">
							<Link to="/signin">Signin </Link>
							{" / "}
							<Link to="/signup">Signup</Link>
						</div>
					)}
				</div>
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
			</article>
		</section>
	);
}

export default Header;
