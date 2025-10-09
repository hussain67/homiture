import { axiosInstance } from "@/utils/axiosInstance";
import type { OrderInfo, OrderResponse } from "@/types/orderTypes";

export async function getAllorders(jwt: string): Promise<OrderResponse> {
	const orders = await axiosInstance.get<OrderResponse>("/orders", {
		headers: {
			Authorization: `Bearer ${jwt}`
		}
	});
	console.log(orders.data);
	return orders.data;
}

export async function createOrder(info: OrderInfo, jwt: string) {
	try {
		const result = await axiosInstance.post(
			"./orders",
			{ data: info },
			{
				headers: {
					Authorization: `Bearer ${jwt}`
				}
			}
		);
		console.log(result);
		return result.data;

		// return redirect("/orders");
	} catch (error) {
		console.log(error);
	}
}
