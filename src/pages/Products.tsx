import AllProducts from "@/features/products/all-products/AllProducts";
import ProductFilter from "@/features/products/all-products/ProductFilter";

function Products() {
	return (
		<div>
			<ProductFilter />
			<AllProducts />
		</div>
	);
}

export default Products;
