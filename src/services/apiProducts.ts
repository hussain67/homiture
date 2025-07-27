import { type ProductResponse, type SingleProductResponse } from "@/types/productTypes";
import { axiosInstance } from "@/utils/axiosInstance";

export async function getAllProducts(): Promise<ProductResponse> {
	try {
		const response = await axiosInstance<ProductResponse>("/products");
		console.log(response.data);
		return response.data;
	} catch {
		throw new Error("Data could not be loaded");
	}
}
export async function getSingleProduct(productId: string): Promise<SingleProductResponse> {
	try {
		const response = await axiosInstance<SingleProductResponse>(`/products/${productId}`);

		return response.data;
	} catch {
		throw new Error("Data could not be loaded");
	}
}
