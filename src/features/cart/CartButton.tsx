import { FiShoppingCart } from "react-icons/fi";
import { useAppSelector } from "@/hooks";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/buttons/button";
function CartButton() {
	const noOfCartItems = useAppSelector(state => state.cartState.numItemsInCart);
	const navigate = useNavigate();
	function onClick() {
		navigate("./cart");
	}
	return (
		<Button
			className=" relative border-none rounded-full"
			onClick={onClick}
			variant={"outline"}
		>
			<FiShoppingCart className="text-blue-600 font-extrabold" />
			<div className="absolute h-6 w-6  rounded-full -top-3 -right-3 bg-blue-500 text-white flex items-center justify-center p-3">
				<span className="text-xs">{noOfCartItems}</span>
			</div>
		</Button>
	);
}

export default CartButton;
