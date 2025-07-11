import { type ProductResponse } from "@/types/productTypes";
import axios from "axios";

const productionUrl = "https://strapi-store-server.onrender.com/api";

export const customFetch = axios.create({
	baseURL: productionUrl
});

export async function getAllProducts(): Promise<ProductResponse> {
	try {
		const response = await customFetch<ProductResponse>("/products");

		return response.data;
	} catch {
		throw new Error("Data could not be loaded");
	}
}
