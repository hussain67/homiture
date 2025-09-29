import { type Product, type ProductAttributes } from "@/types/productTypes";
import { formatAsPound } from "@/utils/formatAsPound";
import { Link } from "react-router-dom";
function ProductCard({ product }: { product: Product }) {
	const { id } = product;
	const { image, title, price, company } = product.attributes as ProductAttributes;
	return (
		<Link
			to={`/products/${id}`}
			className="border-2 border-slate-300 px-12 xs:px-18 b40:px-6 p-6"
		>
			<img
				src={image}
				alt="Product"
				className="w-full h-62 mb-3"
			/>
			<div className="flex justify-between mb-2">
				<h1 className="capitalize">{title}</h1>
				<h1 className="capitalize"> {formatAsPound(price)}</h1>
			</div>
			<h1 className="capitalize">{company}</h1>
		</Link>
	);
}

export default ProductCard;
