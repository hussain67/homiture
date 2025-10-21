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
const getCartItems = (): CartState => {
	const cart = localStorage.getItem("cart");
	return cart ? JSON.parse(cart) : initialState;
};

const cartSlice = createSlice({
	name: "cart",
	initialState: getCartItems(),
	reducers: {
		addItem: (state, action: PayloadAction<CartItem>) => {
			const newCartItem = action.payload;

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
		editItem: (state, action: PayloadAction<{ cartId: string; amount: number }>) => {
			const { cartId, amount } = action.payload;
			const item = state.cartItems.find(i => i.cartId === cartId);
			if (!item) return;
			state.numItemsInCart += amount - item.amount;
			state.cartTotal += (amount - item.amount) * Number(item.price);
			item.amount = amount;
			cartSlice.caseReducers.calculateTotals(state);
		},

		deleteItem: (state, action: PayloadAction<{ cartId: string }>) => {
			const { cartId } = action.payload;
			const item = state.cartItems.find(i => i.cartId === cartId);
			if (!item) return;
			state.numItemsInCart -= item.amount;
			const updatedCartItems = state.cartItems.filter(item => item.cartId !== cartId);
			state.cartItems = updatedCartItems;
			state.cartTotal -= item.amount * Number(item.price);

			cartSlice.caseReducers.calculateTotals(state);
		},
		calculateTotals: state => {
			state.tax = 0.1 * state.cartTotal;
			const total = state.cartTotal + state.tax + state.shipping;
			state.orderTotal = total;
			localStorage.setItem("cart", JSON.stringify(state));
		}
	}
});
export const { addItem, editItem, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
