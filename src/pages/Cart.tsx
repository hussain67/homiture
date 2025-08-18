import CartInfo from "@/features/cart/CartInfo";
// import { useAppSelector } from "@/hooks";

function Cart() {
	// const cartList = useAppSelector(state => console.log(state.cartState));
	// console.log(cartList);
	return (
		<main>
			<h1 className="text-xl border-slate-400 border-b-[.5px] pb-2 mb-8">Cart Items</h1>
			<CartInfo />
		</main>
	);
}

export default Cart;
