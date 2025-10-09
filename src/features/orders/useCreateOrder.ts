import { useMutation } from "@tanstack/react-query";
import { createOrder as createOrderApi } from "@/services/apiOrders";
import { useAppSelector } from "@/hooks";
import type { OrderInfo } from "@/types/orderTypes";

export function useCreateOrder() {
	const { user } = useAppSelector(state => state.userState);

	const { mutate: createOrder, isPending: isCreating } = useMutation({
		mutationFn: (info: OrderInfo) => createOrderApi(info, user?.jwt as string),
		onSuccess(data) {
			console.log(data);
		},
		onError(err) {
			console.log(err);
		}
	});
	return { createOrder, isCreating };
}
