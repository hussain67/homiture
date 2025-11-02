import CheckoutFlow from "@/features/checkout/CheckoutFlow";
import { useAppSelector } from "@/hooks";

function Checkout() {
	const cartItems = useAppSelector(state => state.cartState.cartItems);

	if (cartItems.length === 0) {
		return <div className="text-center text-xl md:mt-15  tracking-wider">"You haven’t added any items to your cart yet. Start shopping!" </div>;
	}
	return <CheckoutFlow />;
}

export default Checkout;
