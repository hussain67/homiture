import { type Product, type ProductAttributes } from "@/types/productTypes";
import { formatAsPound } from "@/utils/formatAsPound";
import { Link } from "react-router-dom";
function ProductCard({ product }: { product: Product }) {
	const { id } = product;
	const { image, title, price, company } = product.attributes as ProductAttributes;
	// console.log(price);
	return (
		<Link
			to={`/products/${id}`}
			className=" max-w-[350px] w-full sm:max-w-none mx-auto  border-1 border-slate-300 "
		>
			<img
				src={image}
				alt="Product"
				className=" w-full h-[200px] mb-3"
			/>
			<div className="p-2 ">
				<div className="flex justify-between mb-2">
					<h1 className="capitalize">{title}</h1>
					<h1 className="capitalize"> {formatAsPound(price)}</h1>
				</div>
				<h1 className="capitalize">{company}</h1>
			</div>
		</Link>
	);
}

export default ProductCard;
