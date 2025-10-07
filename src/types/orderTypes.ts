import type { CartItem } from "./cartTypes";

export type OrderInfoType = {
	name: string;
	address: string;
	chargeTotal: number;
	orderTotal: string;
	cartItems: CartItem[];
	numItemsInCart: number;
};
