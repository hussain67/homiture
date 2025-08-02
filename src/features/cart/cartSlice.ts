import type { CartItem, CartState } from "@/types/cartTypes";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: CartState = {
	cartItems: [],
	numItemsInCart: 0,
	cartTotal: 0,
	shipping: 500,
	tax: 0,
	orderTotal: 0
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addItem: (state, action: PayloadAction<CartItem>) => {
			const newCartItem = action.payload;
			// console.log(newCartItem);
			const item = state.cartItems.find(i => i.cartId === newCartItem.cartId);
			if (!item) {
				state.cartItems.push(newCartItem);
			}
			if (item) {
				item.amount += newCartItem.amount;
			}
			state.numItemsInCart += newCartItem.amount;
			state.cartTotal += newCartItem.amount * Number(newCartItem.price);
			cartSlice.caseReducers.calculateTotals(state);
		},
		calculateTotals: state => {
			state.tax = 0.1 * state.cartTotal;
			state.orderTotal = state.cartTotal + state.tax + state.shipping;
			localStorage.setItem("cart", JSON.stringify(state));
		}
	}
});
export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
