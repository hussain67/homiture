import { useAppSelector } from "@/hooks";
import type { OrderInfoType } from "@/types/orderTypes";
import { formatAsPound } from "@/utils/formatAsPound";
import { useCreateOrder } from "./useCreateOrder";
import { useEffect, useMemo } from "react";

export type CreateOrderPropsType = {
	name: string;
	address: string;
};
function CreateOrder({ name, address }: CreateOrderPropsType) {
	const { createOrder } = useCreateOrder();
	const { cartItems, cartTotal, orderTotal, numItemsInCart } = useAppSelector(state => state.cartState);

	// const orderInfo: OrderInfoType = {
	// 	name,
	// 	address,
	// 	cartItems,
	// 	chargeTotal: orderTotal - cartTotal,
	// 	orderTotal: formatAsPound(orderTotal),
	// 	numItemsInCart
	// };

	const orderInfo = useMemo<OrderInfoType>(
		() => ({
			name,
			address,
			cartItems,
			chargeTotal: orderTotal - cartTotal,
			orderTotal: formatAsPound(orderTotal),
			numItemsInCart
		}),
		[name, address, cartItems, cartTotal, orderTotal, numItemsInCart]
	);
	useEffect(() => {
		createOrder(orderInfo);
	}, [createOrder, orderInfo]);

	return <div>Create Order</div>;
}

export default CreateOrder;
