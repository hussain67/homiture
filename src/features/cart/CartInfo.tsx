import CartList from "./CartList";
import CartTotal from "./CartTotal";

function CartInfo() {
	return (
		<section className="grid lg:grid-cols-12 gap-6">
			<div className="lg:col-span-8">
				<CartList />
			</div>
			<div className="lg:col-span-4">
				<CartTotal />
			</div>
		</section>
	);
}

export default CartInfo;
