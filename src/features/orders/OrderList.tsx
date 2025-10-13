import { Link } from "react-router-dom";
import { useOrders } from "./useOrders";
import day from "dayjs";
import { formatAsPound } from "@/utils/formatAsPound";
import { useAppSelector } from "@/hooks";

function OrderList() {
	const user = useAppSelector(state => state.userState);
	const { data } = useOrders();
	const orders = data?.data;
	if (!user) {
		return;
	}
	return (
		<div>
			{orders?.map(order => {
				const { createdAt, cartItems, numItemsInCart, orderTotal } = order.attributes;
				const date = day(createdAt).format("D MMMM YYYY");
				return (
					<section
						key={order.id}
						className="w-full border-1 border-slate-300  text-[14px] font-light mb-4 "
					>
						<ul className="bg-muted w-full px-4 py-2 flex justify-between">
							<li>
								<span className="block uppercase">Order Placed</span>
								{date}
							</li>
							<li>
								<span className="block uppercase">Number of Items</span>
								<span className="">{numItemsInCart}</span>
							</li>
							<li>
								<span className="block uppercase">Order Total</span>
								{orderTotal}
							</li>
						</ul>
						<ul className="w-full px-3 py-2 border-b-1 border-slate-200">
							{cartItems.map(item => {
								const { image, title, productId, amount, price } = item;
								const totalProductCost = formatAsPound(amount * Number(price));
								return (
									<div
										key={item.cartId}
										className=" grid grid-cols-[150px_1fr_1fr_1fr] gap-8 mb-8 items-center "
									>
										<li>
											<img
												src={image}
												alt=""
												className="w-full h-[160px]"
											/>
										</li>
										<li>{title}</li>

										<li>
											<Link
												to={`/products/${productId}`}
												className="bg-muted px-4 py-1 rounded-md tracking-widest cursor-pointer"
											>
												View Item
											</Link>
										</li>
										<li>
											{amount} ✖️ {formatAsPound(price)} 🟰 {totalProductCost}
										</li>
									</div>
								);
							})}
						</ul>
					</section>
				);
			})}
		</div>
	);
}

export default OrderList;
