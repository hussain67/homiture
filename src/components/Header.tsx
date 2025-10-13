import { setTheme } from "@/features/theme/themeSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { Link, useNavigate } from "react-router-dom";
import { FaRegMoon } from "react-icons/fa6";
import { IoSunnyOutline } from "react-icons/io5";
import type { Theme } from "@/types/themeTypes";

function Header() {
	const { theme } = useAppSelector(state => state.themeState);
	const userName = useAppSelector(state => state.userState.user?.userName);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	//Handle dispatch
	function handleDispatch(theme: Theme) {
		dispatch(setTheme(theme));
	}
	function handleSignout() {
		navigate("/signout");
	}
	return (
		<section className="ml-auto flex gap-5  items-center mr-3">
			<div>
				{userName && (
					<div className="flex gap-6 capitalize">
						<span>Hello {userName}</span>
						<button
							className="cursor-pointer"
							onClick={handleSignout}
						>
							Signout
						</button>
					</div>
				)}
				{!userName && (
					<div className="flex gap-3">
						<Link to="/signin">Signin </Link>
						{"/"}
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
				{theme !== "dark" && (
					<button
						className="cursor-pointer"
						onClick={() => handleDispatch("dark")}
					>
						<FaRegMoon />{" "}
					</button>
				)}
			</div>
		</section>
	);
}

export default Header;
