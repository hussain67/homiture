import { useAppSelector } from "@/hooks";
import CartListItem from "./CartListItem";
import type { CartItem } from "@/types/cartTypes";

function CartList() {
	const cartItems: CartItem[] = useAppSelector(state => state.cartState.cartItems);

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
