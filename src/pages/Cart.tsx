import CartList from "@/features/cart/CartList";
import CartTotal from "@/features/cart/CartTotal";
import { useAppSelector } from "@/hooks";

function Cart() {
	const cartItems = useAppSelector(state => state.cartState.cartItems);

	if (cartItems.length === 0) {
		return <div className="text-center text-xl md:mt-15  tracking-wider">"You haven’t added any items to your cart yet. Start shopping!" </div>;
	}
	return (
		<section className="grid lg:grid-cols-12 gap-5 lg:gap-10">
			<div className="lg:col-span-8">
				<CartList />
			</div>
			<div className="lg:col-span-4">
				<CartTotal />
			</div>
		</section>
	);
}

export default Cart;
