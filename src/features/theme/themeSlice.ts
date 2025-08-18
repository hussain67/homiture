import { createSlice } from "@reduxjs/toolkit";
import type { Theme } from "@/types/themeTypes";
import type { PayloadAction } from "@reduxjs/toolkit";
import { applyTheme } from "@/utils/applyTheme";

type ThemeState = {
	theme: Theme;
};

// Get theme from localstorage
const initializeTheme = (): Theme => {
	const theme = localStorage.getItem("theme") as Theme;
	applyTheme(theme);
	return theme;
};

// Initial State
const initialState: ThemeState = {
	theme: initializeTheme() || "white"
};

// Theme Slice
export const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		setTheme: (state, action: PayloadAction<Theme>) => {
			state.theme = action.payload;
			// console.log(action.payload);
			applyTheme(action.payload);
			localStorage.setItem("theme", action.payload as string);
		}
	}
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
