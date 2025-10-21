import { FiShoppingCart } from "react-icons/fi";
import { useAppSelector } from "@/hooks";
import { useNavigate } from "react-router-dom";
function CartButton() {
	const noOfCartItems = useAppSelector(state => state.cartState.numItemsInCart);
	const navigate = useNavigate();
	function onClick() {
		navigate("./cart");
	}
	return (
		<button
			className="cursor-pointer p-2 rounded-sm bg-background relative"
			onClick={onClick}
		>
			<FiShoppingCart className="text-blue-500" />
			<div className="absolute h-6 w-6  rounded-full -top-3 -right-3 bg-blue-500 text-white flex items-center justify-center p-3">
				<span className="text-xs">{noOfCartItems}</span>
			</div>
		</button>
	);
}

export default CartButton;
