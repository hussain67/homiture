import OrderItem from "./OrderItem";
import { useOrders } from "./useOrders";
import { useAppSelector } from "@/hooks";

function OrderList() {
	const user = useAppSelector(state => state.userState);
	const { data } = useOrders();
	const orders = data?.data;
	if (!user) {
		return;
	}
	return (
		<div>
			{orders?.map(order => (
				<OrderItem
					key={order.id}
					order={order.attributes}
					orderId={order.id}
				/>
			))}
		</div>
	);
}

export default OrderList;
