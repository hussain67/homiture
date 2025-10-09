import { useAllProducts } from "@/features/products/all-products/useAllProducts";
import ProductCard from "../ProductCard";
import Error from "@/pages/Error";
import PaginationContainer from "@/components/PaginationContainer";
import Spinner from "@/components/Spinner";

function AllProducts() {
	const { data, error, isLoading } = useAllProducts();
	// console.log(data);
	const products = data?.data;
	// console.log(data?.meta);
	const pageCount = data?.meta.pagination.pageCount as number;

	if (isLoading) {
		return <Spinner />;
	}
	if (error) {
		// console.log(error.message);
		return <Error message={error.message} />;
	}
	return (
		<section className="">
			<div className=" grid gap-5 grid-cols-[repeat(auto-fill,_minmax(290px,_1fr))]">
				{products?.map(product => (
					<ProductCard
						product={product}
						key={product.id}
					/>
				))}
			</div>
			<div className="mt-4 flex justify-center sm:justify-end">
				<PaginationContainer pageCount={pageCount} />
			</div>
		</section>
	);
}

export default AllProducts;
