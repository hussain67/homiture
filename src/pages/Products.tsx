import AllProducts from "@/features/products/all-products/AllProducts";
import ProductFilter from "@/features/products/all-products/ProductFilter";
import ProductSort from "@/features/products/all-products/ProductSort";

function Products() {
	return (
		<section>
			<ProductSort />

			<div className="grid lg:grid-cols-[225px_1fr] gap-2">
				<div className="hidden lg:block">
					<ProductFilter />
				</div>
				<AllProducts />
			</div>
		</section>
	);
}

export default Products;
