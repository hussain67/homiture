import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "./features/theme/themeSlice";
import userReducer from "./features/user/userSlice";
import cartReducer from "./features/cart/cartSlice";

export const store = configureStore({
	reducer: {
		themeState: themeReducer,
		userState: userReducer,
		cartState: cartReducer
	}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
