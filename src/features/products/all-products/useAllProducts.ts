import { getAllProducts } from "@/services/apiProducts";
import { useQuery } from "@tanstack/react-query";

// Hook

export function useAllProducts() {
	const { isLoading, error, data } = useQuery({
		queryKey: ["allProducts"],
		queryFn: getAllProducts
	});
	return { isLoading, error, data };
}
