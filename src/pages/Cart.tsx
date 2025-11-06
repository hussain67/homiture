import RouteButton from "@/components/buttons/RouteButton";
import CartList from "@/features/cart/CartList";
import CartTotal from "@/features/cart/CartTotal";
import { useAppSelector } from "@/hooks";
function Cart() {
	const cartItems = useAppSelector(state => state.cartState.cartItems);

	if (cartItems.length === 0) {
		return <div className="text-center text-xl md:mt-15  tracking-wider">"You haven’t added any items to your cart yet. Start shopping!" </div>;
	}
	return (
		<section className="grid lg:grid-cols-[2fr_1fr] gap-5 lg:gap-10  ">
			<div className="">
				<CartList />
			</div>
			<div className=" grid justify-center sm:justify-end h-28">
				<CartTotal />
				<RouteButton
					to="/checkout"
					text="Checkout"
					className="mt-4"
					variant="brand"
				/>
			</div>
		</section>
	);
}

export default Cart;
