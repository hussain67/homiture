import axios from "axios";

const productionUrl = "https://strapi-store-server.onrender.com/api";

export const customFetch = axios.create({
	baseURL: productionUrl
});

export async function getAllProducts() {
	const products = await customFetch("/products");
	// console.log(products.data);
	return products.data;
}
