import { type Product } from "@/types/productTypes";
function ProductCard({ product }: { product: Product }) {
	// console.log(product.attributes);
	const { image, title } = product.attributes;
	return (
		<div>
			<h1>{title}</h1>
			<img
				src={image}
				alt="Product"
				className="w-[350px]"
			/>
		</div>
	);
}

export default ProductCard;
