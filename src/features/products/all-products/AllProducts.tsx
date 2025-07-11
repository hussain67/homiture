import { useAllProducts } from "@/features/products/all-products/useAllProducts";
import ProductCard from "../ProductCard";
import Error from "@/pages/Error";

function AllProducts() {
	const { data, error, isLoading } = useAllProducts();
	const products = data?.data;
	if (isLoading) {
		return <h1 className="text-7xl">Loading....</h1>;
	}
	if (error) {
		console.log(error.message);
		return <Error message={error.message} />;
	}
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
