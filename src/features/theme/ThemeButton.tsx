import { FaRegMoon } from "react-icons/fa6";
import { IoSunnyOutline } from "react-icons/io5";
import { setTheme } from "@/features/theme/themeSlice";
import type { Theme } from "@/types/themeTypes";
import { useAppDispatch, useAppSelector } from "@/hooks";

function ThemeButton() {
	const { theme } = useAppSelector(state => state.themeState);
	const dispatch = useAppDispatch();

	//Handle dispatch
	function handleDispatch(theme: Theme) {
		dispatch(setTheme(theme));
	}
	return (
		<div className="flex items-center text-xl">
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
	);
}

export default ThemeButton;
