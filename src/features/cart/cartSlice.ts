import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartItem, CartState } from "@/types/cartTypes";

export const cartInitialState: CartState = {
	cartItems: [],
	numItemsInCart: 0,
	cartTotal: 0,
	shipping: 500,
	tax: 0,
	orderTotal: 0
};

const cartSlice = createSlice({
	name: "cart",
	initialState: cartInitialState,
	reducers: {
		addItem: (state, action: PayloadAction<CartItem>) => {
			const item = state.cartItems.find(i => i.cartId === action.payload.cartId);

			if (item) {
				item.amount += action.payload.amount;
			} else {
				state.cartItems.push(action.payload);
			}

			state.numItemsInCart += action.payload.amount;
			state.cartTotal += action.payload.amount * Number(action.payload.price);
			cartSlice.caseReducers.calculateTotals(state);
		},

		editItem: (state, action: PayloadAction<{ cartId: string; amount: number }>) => {
			const item = state.cartItems.find(i => i.cartId === action.payload.cartId);
			if (!item) return;

			const diff = action.payload.amount - item.amount;
			item.amount = action.payload.amount;

			state.numItemsInCart += diff;
			state.cartTotal += diff * Number(item.price);
			cartSlice.caseReducers.calculateTotals(state);
		},

		deleteItem: (state, action: PayloadAction<{ cartId: string }>) => {
			const item = state.cartItems.find(i => i.cartId === action.payload.cartId);
			if (!item) return;

			state.cartItems = state.cartItems.filter(i => i.cartId !== item.cartId);
			state.numItemsInCart -= item.amount;
			state.cartTotal -= item.amount * Number(item.price);
			cartSlice.caseReducers.calculateTotals(state);
		},

		clearCart: () => cartInitialState,

		calculateTotals: state => {
			state.tax = 0.1 * state.cartTotal;
			state.orderTotal = state.cartTotal + state.tax + state.shipping;
		}
	}
});

export const { addItem, editItem, deleteItem, clearCart, calculateTotals } = cartSlice.actions;

export default cartSlice.reducer;
