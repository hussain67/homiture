import { useMutation } from "@tanstack/react-query";
import { createOrder as createOrderApi } from "@/services/apiProducts";
import { useAppSelector } from "@/hooks";
import type { OrderInfoType } from "@/types/orderTypes";

export function useCreateOrder() {
	const { user } = useAppSelector(state => state.userState);

	const { mutate: createOrder, isPending: isCreating } = useMutation({
		mutationFn: (info: OrderInfoType) => createOrderApi(info, user?.jwt as string),
		onSuccess(data) {
			console.log(data);
		},
		onError(err) {
			console.log(err);
		}
	});
	return { createOrder, isCreating };
}
