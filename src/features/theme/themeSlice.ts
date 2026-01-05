import { createSlice } from "@reduxjs/toolkit";
import type { Theme } from "@/types/themeTypes";
import type { PayloadAction } from "@reduxjs/toolkit";

type ThemeState = {
	theme: Theme;
};

// Initial State
export const themeInitialState: ThemeState = {
	theme: "light"
};

// Theme Slice
export const themeSlice = createSlice({
	name: "theme",
	initialState: themeInitialState,
	reducers: {
		setTheme: (state, action: PayloadAction<Theme>) => {
			state.theme = action.payload;
		}
	}
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
