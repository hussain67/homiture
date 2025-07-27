import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	user: "shahid"
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {}
});

export default userSlice.reducer;
