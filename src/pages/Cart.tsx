import { Button } from "@/components/ui/button";
import CartList from "@/features/cart/CartList";
import CartTotal from "@/features/cart/CartTotal";
import { useAppSelector } from "@/hooks";
import { Link } from "react-router-dom";
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
			<div className=" grid justify-center sm:justify-end ">
				<CartTotal />
				<div className="mt-5 ">
					<Button
						asChild
						className="bg-blue-500 hover:bg-blue-400 text-white tracking-wider w-[150px]"
					>
						<Link to="/checkout">Go to Checkout</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}

export default Cart;
