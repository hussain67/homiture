import { type ProductResponse, type SingleProductResponse } from "@/types/productTypes";
import axios from "axios";

const productionUrl = "https://strapi-store-server.onrender.com/api";

export const customFetch = axios.create({
	baseURL: productionUrl
});

export async function getAllProducts(): Promise<ProductResponse> {
	try {
		const response = await customFetch<ProductResponse>("/products");
		console.log(response.data);
		return response.data;
	} catch {
		throw new Error("Data could not be loaded");
	}
}
export async function getSingleProduct(productId: string): Promise<SingleProductResponse> {
	try {
		const response = await customFetch<SingleProductResponse>(`/products/${productId}`);

		return response.data;
	} catch {
		throw new Error("Data could not be loaded");
	}
}
