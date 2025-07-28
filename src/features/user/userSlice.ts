import type { User } from "@/types/authenticationTypes";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type UserState = {
	user: User | null;
};

function getUserFromLocalstorage() {
	const user = localStorage.getItem("user");
	if (!user) return null;
	return JSON.parse(user);
}
const initialState: UserState = {
	user: getUserFromLocalstorage()
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		loginUser: (state, action: PayloadAction<User>) => {
			// console.log(action.payload);
			state.user = action.payload;

			localStorage.setItem("user", JSON.stringify(action.payload));
		},
		logoutUser: state => {
			state.user = null;
			localStorage.removeItem("user");
		}
	}
});
export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
