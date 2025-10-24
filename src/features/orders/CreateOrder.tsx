import { useAppDispatch, useAppSelector } from "@/hooks";
import type { OrderInfo } from "@/types/orderTypes";
import { formatAsPound } from "@/utils/formatAsPound";
import { useCreateOrder } from "./useCreateOrder";
import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import useShowComponent from "@/utils/useShowComponent";
import CheckoutStatus from "../checkout/CheckoutStatus";

// Type
export type CreateOrderPropsType = {
	name: string;
	address: string;
};

// Function
function CreateOrder({ name, address }: CreateOrderPropsType) {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { createOrder, isCreating, isSuccess } = useCreateOrder();
	const { cartItems, cartTotal, orderTotal, numItemsInCart } = useAppSelector(state => state.cartState);
	const showInfo = useShowComponent(true, 500);

	// Order Information
	const orderInfo = useMemo<OrderInfo>(
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

	// Navigate to home page after placing order
	useEffect(() => {
		if (!isSuccess) return;

		const timer = window.setTimeout(() => {
			const isLocal = window.location.hostname === "localhost";

			if (isLocal) {
				// For local dev, just navigate within local app
				navigate("/");
			} else {
				// In production or preview, force redirect to live domain
				window.location.href = "https://homiture.netlify.app/";
			}

			navigate("/");
		}, 3500);
		return () => window.clearTimeout(timer);
	}, [isSuccess, navigate, dispatch]);

	if (isCreating) {
		return <CheckoutStatus />;
	}
	return (
		<div className={`flex items-center justify-center z-1 text-3xl text-green-600  `}>
			<h1 className={`${showInfo ? "scale-0 " : "scale-100 duration-2000 transition-all"}`}>Order Placed Successfully</h1>
		</div>
	);
}

export default CreateOrder;
