import { useAppSelector } from "@/hooks";
import { formatAsPound } from "@/utils/formatAsPound";

function CartTotal() {
	const cart = useAppSelector(state => state.cartState);
	const { cartTotal, shipping, tax, orderTotal } = cart;
	return (
		<div className="bg-muted p-3 w-[350px] lg:w-full ml-auto mr-auto sm:mr-0">
			<h1 className="flex justify-between mb-4">
				SubTotal <span> {formatAsPound(cartTotal)}</span>{" "}
			</h1>
			<h1 className="flex justify-between mb-4">
				Shipping <span>{formatAsPound(shipping)}</span>{" "}
			</h1>
			<h1 className="flex justify-between mb-4">
				Tax <span> {formatAsPound(tax)}</span>{" "}
			</h1>
			<h1 className="flex justify-between mb-4">
				Order Total <span> {formatAsPound(orderTotal)}</span>{" "}
			</h1>
		</div>
	);
}

export default CartTotal;
