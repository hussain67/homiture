import { useAppSelector } from "@/hooks";
import CartListItem from "./CartListItem";

function CartList() {
	const cartItems = useAppSelector(state => state.cartState.cartItems);
	if (cartItems.length === 0) {
		return <div>You do not have </div>;
	}
	return (
		<div>
			{cartItems.map(item => (
				<CartListItem
					item={item}
					key={item.cartId}
				/>
			))}
		</div>
	);
}

export default CartList;
