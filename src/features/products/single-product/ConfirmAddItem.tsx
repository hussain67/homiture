import RouteButton from "@/components/buttons/RouteButton";
import type { CartItem } from "@/types/cartTypes";

function ConfirmAddItem({ showAddItem, setShowAddItem, newCartItem }: { showAddItem: boolean; setShowAddItem: React.Dispatch<React.SetStateAction<boolean>>; newCartItem: CartItem }) {
	const { cartId, productId, image, title, price, amount, productColor, company } = newCartItem;
	return (
		<section className={`fixed top-0 right-0 w-full sm:w-[500px] h-screen p-8 bg-muted transition-all duration-1000 ${showAddItem ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}>
			<h1 className="mt-20 mb-15 text-2xl tracking-wide">Item added</h1>
			<article className=" mx-auto w-full flex gap-4  mb-15">
				<img
					src={image}
					alt="Product Image"
					className="h-25 w-40"
				/>
				<div className="">
					{title} by {company}
					<div className="flex gap-2 items-center mt-2 ">
						<span>Color:</span>
						<span
							className="w-4 h-4 rounded-full mt-1"
							style={{ backgroundColor: productColor }}
						></span>
					</div>
				</div>
				<span className="border-1 border-slate-300 px-4 py-2 self-start">{amount}</span>
			</article>
			<div className="flex justify-between">
				<RouteButton
					to="/checkout"
					text="Go to checkout"
					variant="brand"
				/>
				<RouteButton
					to="/cart"
					text="Go to cart"
					variant="brand"
				/>
			</div>
			<button
				className="absolute top-7 right-7 cursor-pointer"
				onClick={() => setShowAddItem(false)}
			>
				❌
			</button>
		</section>
	);
}

export default ConfirmAddItem;
