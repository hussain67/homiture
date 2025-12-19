import type { OrderAttributes } from "@/types/orderTypes";
import { Link } from "react-router-dom";
import day from "dayjs";
import { formatAsPound } from "@/utils/formatAsPound";
import { IoIosArrowDown } from "react-icons/io";

function OrderItem({ order, orderId }: { order: OrderAttributes; orderId: string }) {
	const { createdAt, cartItems, orderTotal, name, address } = order;
	const date = day(createdAt).format("D MMMM YYYY");
	return (
		<section className="w-full border-1 border-slate-300  text-[14px] font-light mb-4 ">
			<ul className="bg-muted w-full px-4 py-2 flex justify-between">
				<li>
					<span className="block uppercase">Order Placed</span>
					{date}
				</li>
				<li className="">
					<span className=" uppercase">Dispatch to</span>
					<div className="relative group">
						<span className="flex gap-4 items-center ">
							{name} <IoIosArrowDown />
						</span>
						<p className="hidden absolute group-hover:block group-hover:bg-muted px-3 py-2 whitespace-nowrap">{address}</p>
					</div>
				</li>
				<li>
					<span className="block uppercase">Order Id: </span>
					<span className="">{orderId}</span>
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
									className=" bg-muted sm:px-3 sm:py-1 rounded-md tracking-widest cursor-pointer"
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
}

export default OrderItem;
