import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/theme/themeSlice";
import userReducer from "../features/user/userSlice";
import cartReducer from "../features/cart/cartSlice";
import { loadState, saveState } from "./persists";

export const store = configureStore({
	reducer: {
		themeState: themeReducer,
		userState: userReducer,
		cartState: cartReducer
	},
	preloadedState: {
		themeState: loadState("theme"),
		userState: loadState("user"),
		cartState: loadState("cart")
	}
});
store.subscribe(() => {
	const state = store.getState();

	saveState("theme", state.themeState);
	saveState("cart", state.cartState);
	saveState("user", state.userState);
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
