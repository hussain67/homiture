import { FaRegMoon } from "react-icons/fa6";
import { IoSunnyOutline } from "react-icons/io5";
import { setTheme } from "@/features/theme/themeSlice";
import type { Theme } from "@/types/themeTypes";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { Button } from "@/components/buttons/button";

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
				<Button
					onClick={() => handleDispatch("light")}
					variant={"outline"}
					className="border-none"
				>
					{" "}
					<IoSunnyOutline />
				</Button>
			)}

			{theme !== "dark" && (
				<Button
					variant={"outline"}
					className="border-none"
					onClick={() => handleDispatch("dark")}
				>
					<FaRegMoon />{" "}
				</Button>
			)}
		</div>
	);
}

export default ThemeButton;
