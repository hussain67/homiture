import { getAllProducts } from "@/services/apiAllProducts";
import { useQuery } from "@tanstack/react-query";

// Hook

export function useAllProducts() {
	const { isLoading, error, data } = useQuery({
		queryKey: ["allProducts"],
		queryFn: getAllProducts
	});
	// console.log(data?.data);
	return { isLoading, error, data };
}
