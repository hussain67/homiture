import { getAllProducts } from "@/services/apiProducts";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

// Hook

export function useAllProducts() {
	const [searchParams] = useSearchParams();
	const search = searchParams.get("search") || " ";
	const category = searchParams.get("category") || "all";
	const company = searchParams.get("company") || "all";
	const order = searchParams.get("order") || "a-z";
	const price = searchParams.get("price") || "100000";
	const shipping = searchParams.get("shipping") === "on" ? true : false;
	const page = searchParams.get("page") || "1";

	const { isLoading, error, data } = useQuery({
		queryKey: ["allProducts", search, category, company, order, price, shipping, page],
		queryFn: () => getAllProducts(search, category, company, order, price, shipping, page)
	});
	return { isLoading, error, data };
}
