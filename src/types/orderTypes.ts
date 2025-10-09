import type { CartItem } from "./cartTypes";

export type OrderInfo = {
	name: string;
	address: string;
	chargeTotal: number;
	orderTotal: string;
	cartItems: CartItem[];
	numItemsInCart: number;
};

export type OrderResponse = {
	data: Order[];
	meta: ProductMeta;
};

export type Order = {
	attributes: OrderAttributes;
	id: string;
};
export type OrderAttributes = {
	address: string;
	cartItems: CartItem[];
	name: string;
	numItemsInCart: number;
	orderTotal: string;
	createdAt: string;
	publishedAt: string;
	updatedAt: string;
};

export type ProductMeta = {
	pagination: {
		page: number;
		pageCount: number;
		pageSize: number;
		total: number;
	};
};
