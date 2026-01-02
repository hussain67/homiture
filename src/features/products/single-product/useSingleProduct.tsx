import { getSingleProduct } from "@/services/apiProducts";
// import type { Product } from "@/types/productTypes";
import { useQuery } from "@tanstack/react-query";

export function useSingleProduct(productId: string) {
	const { isLoading, error, data } = useQuery({
		queryKey: [`product-${productId}`],
		queryFn: async () => await getSingleProduct(productId)
	});
	const productData = data?.data;
	return { isLoading, error, productData };
}
