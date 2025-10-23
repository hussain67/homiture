import { getfeaturedProducts } from "@/services/apiProducts";
import { useQuery } from "@tanstack/react-query";

export function useFeaturedProducts() {
	const {
		data: featuredProducts,
		isFetching,
		error
	} = useQuery({
		queryKey: ["featuredProducts"],
		queryFn: getfeaturedProducts
	});
	return { featuredProducts, isFetching, error };
}
