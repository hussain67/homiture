import type { ProductAttributes } from "@/types/productTypes";
import { http, HttpResponse } from "msw";

const mockAttributes: ProductAttributes = {
	title: "Modern Chair",
	company: "Ikea",
	description: "A comfortable modern chair",
	featured: true,
	createdAt: "2024-01-01",
	updatedAt: "2024-01-01",
	publishedAt: "2024-01-01",
	category: "furniture",
	image: "/chair.png",
	price: "199",
	shipping: true,
	colors: ["red", "blue"]
};

export const handlers = [
	http.get("*/api/products/:productId", async ({ params }) => {
		const { productId } = params;
		// console.log(productId);
		return HttpResponse.json({
			data: {
				id: productId,
				attributes: mockAttributes
			}
		});
	})
];
