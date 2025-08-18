import { useAppSelector } from "@/hooks";
import CartListItem from "./CartListItem";

function CartList() {
	const cartItems = useAppSelector(state => state.cartState.cartItems);
	// console.log(cartItems);
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
