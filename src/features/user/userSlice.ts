import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User } from "@/types/authenticationTypes";

export type UserState = {
	user: User | null;
};

export const userInitialState: UserState = {
	user: null
};

export const userSlice = createSlice({
	name: "user",
	initialState: userInitialState,
	reducers: {
		signinUser: (state, action: PayloadAction<User>) => {
			state.user = action.payload;
		},
		signoutUser: state => {
			state.user = null;
		}
	}
});

export const { signinUser, signoutUser } = userSlice.actions;
export default userSlice.reducer;
