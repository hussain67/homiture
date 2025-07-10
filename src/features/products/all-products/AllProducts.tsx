import { useAllProducts } from "@/features/products/all-products/useAllProducts";
import ProductCard from "../ProductCard";

function AllProducts() {
	const { data, error, isLoading } = useAllProducts();
	const products = data?.data;
	return (
		<div>
			<h1>All Products</h1>
			{products?.map(product => (
				<ProductCard
					product={product}
					key={product.id}
				/>
			))}
		</div>
	);
}

export default AllProducts;
