import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useAppSelector } from "@/hooks";
function Navbar() {
	const noOfCartItems = useAppSelector(state => state.cartState.numItemsInCart);
	return (
		<div className="flex items-center justify-between  py-4 px-4  bg-muted">
			<div className="flex gap-5 ml-auto items-center ">
				<NavLink to="/home">Home</NavLink>
				<NavLink to="/about">About</NavLink>
				<NavLink to="/products">Products</NavLink>
				<NavLink to="/cart">Cart</NavLink>
				<NavLink to="/checkout">Checkout</NavLink>
			</div>
			<button className="ml-auto cursor-pointer p-3 rounded-sm bg-background relative">
				<FiShoppingCart className="text-blue-500" />
				<div className="absolute h-6 w-6  rounded-full -top-3 -right-3 bg-blue-500 text-white flex items-center justify-center p-3">
					<span className="text-xs">{noOfCartItems}</span>
				</div>
			</button>
		</div>
	);
}

export default Navbar;
