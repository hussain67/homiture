import { type ProductResponse, type SingleProductResponse } from "@/types/productTypes";
import { axiosInstance } from "@/utils/axiosInstance";

export async function getAllProducts(search: string, category: string, company: string, order: string, price: string, shipping: boolean, page: string): Promise<ProductResponse> {
	try {
		const params = { search, category, company, order, price, shipping, page };
		const response = await axiosInstance<ProductResponse>("/products", { params });
		return response.data;
	} catch {
		throw new Error("Data could not be loaded");
	}
}
// Featured products

export async function getfeaturedProducts(): Promise<ProductResponse> {
	try {
		const response = await axiosInstance<ProductResponse>("/products?featuredProducts=true");
		return response.data;
	} catch {
		throw new Error("Data could not be loaded");
	}
}

export async function getSingleProduct(productId: string): Promise<SingleProductResponse> {
	try {
		const response = await axiosInstance<SingleProductResponse>(`/products/${productId}`);
		console.log(response.data);
		return response.data;
	} catch {
		throw new Error("Data could not be loaded");
	}
}
