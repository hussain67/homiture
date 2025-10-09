import { useAppSelector } from "@/hooks";
import { getAllorders } from "@/services/apiOrders";
import { useQuery } from "@tanstack/react-query";

export function useOrders() {
	const { user } = useAppSelector(store => store.userState);
	const { data, isFetching, error } = useQuery({
		queryKey: ["orders", user?.userName],
		queryFn: () => getAllorders(user?.jwt as string)
	});
	return { data, isFetching, error };
}
