import Spinner from "@/components/Spinner";
import { useFeaturedProducts } from "./useFeaturedProducts";
import Error from "@/pages/Error";
import ProductCard from "../ProductCard";

function FeaturedProducts() {
	const { featuredProducts, isFetching, error } = useFeaturedProducts();
	const products = featuredProducts?.data;
	if (isFetching) {
		return <Spinner />;
	}
	if (error) {
		return <Error message={error.message} />;
	}
	return (
		<section className="">
			<h1 className="text-xl border-b-slate-300 border-b-[1px] pb-6 mb-6 tracking-wider">Featured Products</h1>
			<div className=" grid gap-5 grid-cols-[repeat(auto-fill,_minmax(290px,_1fr))]">
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

export default FeaturedProducts;
