import { useEffect, useState } from "react";
import type { CartItem } from "@/types/cartTypes";
import { formatAsPound } from "@/utils/formatAsPound";
import ChangeProductAmount from "./ChangeProductAmount";
import { useAppDispatch } from "@/hooks";
import { deleteItem, editItem } from "./cartSlice";

function CartListItem({ item }: { item: CartItem }) {
	const { title, image, company, amount, price, productColor, cartId } = item;
	const [productAmount, setProductAmount] = useState(amount);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(editItem({ cartId, amount: productAmount }));
	}, [productAmount, dispatch, cartId]);
	console.log(productAmount);

	function handleDelete() {
		dispatch(deleteItem({ cartId }));
	}
	return (
		<section className="mb-8  pb-4 grid sm:grid-cols-[250px_1fr] mx-auto sm:gap-4 sm:pr-4">
			<img
				src={image}
				alt={title}
				className="w-[350px] h-[200px] mx-auto sm:w-[250px] sm:h-[150px] mb-4"
			/>

			<div className=" w-[350px] grid grid-cols-3 mx-auto  sm:mx-4 sm:w-full ">
				<div className="flex flex-col gap-1 ">
					<p className="capitalize">{title}</p>
					<p>{company}</p>
					<p className="flex items-center">
						Color:{" "}
						<span
							className="w-4 h-4 rounded-full inline-block ml-2"
							style={{ backgroundColor: productColor }}
						></span>
					</p>
				</div>
				<div className="flex flex-col gap-2 w-14 mx-auto">
					<p>Amount</p>
					<ChangeProductAmount
						productAmount={productAmount}
						setProductAmount={setProductAmount}
					/>
					<button
						className="text-red-500 cursor-pointer"
						onClick={handleDelete}
					>
						Delete
					</button>
				</div>
				<div className="text-end">{formatAsPound(price)}</div>
			</div>
		</section>
	);
}

export default CartListItem;
