import CartList from "@/features/cart/CartList";
import { useAppSelector } from "@/hooks";

function Cart() {
	const cartList = useAppSelector(state => console.log(state.cartState));
	console.log(cartList);
	return (
		<div>
			<CartList />
		</div>
	);
}

export default Cart;
