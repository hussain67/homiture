import { getSingleProduct } from "@/services/apiProducts";
import { useQuery } from "@tanstack/react-query";

export function useSingleProduct(productId: string) {
	const { isLoading, error, data } = useQuery({
		queryKey: [`product-${productId}`],
		queryFn: async () => await getSingleProduct(productId)
	});
	return { isLoading, error, data };
}
