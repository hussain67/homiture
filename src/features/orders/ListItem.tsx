import type { Order } from "@/types/orderTypes";

function ListItem({ order }: { order: Order }) {
	console.log(order.attributes);
	const { address, orderTotal } = order.attributes;
	return <div>{address}</div>;
}

export default ListItem;
