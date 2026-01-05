import { useEffect } from "react";
import { useSelector } from "react-redux";
import { applyTheme } from "./applyTheme";
import type { RootState } from "@/store/store";

export function ThemeEffect() {
	const theme = useSelector((state: RootState) => state.themeState.theme);

	useEffect(() => {
		applyTheme(theme);
	}, [theme]);

	return null;
}
