import { useMutation } from "@tanstack/react-query";
import { createOrder as createOrderApi } from "@/services/apiOrders";
import { useAppSelector } from "@/hooks";
import type { OrderInfo } from "@/types/orderTypes";
// import { clearCart } from "../cart/cartSlice";

export function useCreateOrder() {
	const { user } = useAppSelector(state => state.userState);
	// const dispatch = useAppDispatch();

	const {
		mutate: createOrder,
		isPending: isCreating,
		isSuccess
	} = useMutation({
		mutationFn: (info: OrderInfo) => createOrderApi(info, user?.jwt as string),
		onSuccess() {
			// dispatch(clearCart());
		},
		onError() {
			throw new Error("Order Could not be created");
		}
	});
	return { createOrder, isCreating, isSuccess };
}
