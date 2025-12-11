import { clearCart } from "@/features/cart/cartSlice";
import OrderItem from "@/features/orders/OrderItem";
import { useOrders } from "@/features/orders/useOrders";
import { useAppDispatch } from "@/hooks";
import type { OrderAttributes } from "@/types/orderTypes";

import { useEffect } from "react";

function NewOrder() {
	const dispatch = useAppDispatch();
	const { data } = useOrders();

	useEffect(() => {
		dispatch(clearCart());
	}, [dispatch]);
	const latestOrder = data?.data[0];

	return (
		<section>
			<h1 className="text-center text-2xl tracking-wide mb-4">Order summery</h1>
			{latestOrder && (
				<OrderItem
					key={latestOrder?.id}
					order={latestOrder?.attributes as OrderAttributes}
					orderId={latestOrder?.id as string}
				/>
			)}
		</section>
	);
}

export default NewOrder;
