import { createSlice } from "@reduxjs/toolkit";
import type { Theme } from "@/types/themeTypes";
import type { PayloadAction } from "@reduxjs/toolkit";

type ThemeState = {
	theme: Theme;
};

const initialState: ThemeState = {
	theme: "dark"
};

export const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {}
});

// export const {} = themeSlice.actions;
export default themeSlice.reducer;
