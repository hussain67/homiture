import { useAllProducts } from "@/features/products/all-products/useAllProducts";
import ProductCard from "../ProductCard";
import Error from "@/pages/Error";
import PaginationContainer from "@/components/PaginationContainer";

function AllProducts() {
	const { data, error, isLoading } = useAllProducts();
	// console.log(data);
	const products = data?.data;
	console.log(data?.meta);
	if (isLoading) {
		return <h1 className="text-7xl">Loading....</h1>;
	}
	if (error) {
		console.log(error.message);
		return <Error message={error.message} />;
	}
	return (
		<section>
			<div>
				<PaginationContainer />
			</div>
			<h1>All Products</h1>
			<div className="grid gap-5 grid-cols-[repeat(auto-fill,_minmax(290px,_1fr))]">
				{products?.map(product => (
					<ProductCard
						product={product}
						key={product.id}
					/>
				))}
			</div>
		</section>
	);
}

export default AllProducts;
