export type ProductResponse = {
	data: Product[];
	meta: ProductsMeta;
};

export type SingleProductResponse = {
	data: Product;
	meta: ProductsMeta;
};
// export type SingleProductResponse = {
// 	data: Product;
// 	meta: object;
// };
export type Product = {
	id: string;
	attributes?: ProductAttributes;
};
export type ProductAttributes = {
	title: string;
	company: string;
	description: string;
	featured: boolean;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	category: string;
	image: string;
	price: string;
	shipping: boolean;
	colors: string[];
};
export type ProductsMeta = {
	categories: string[];
	companies: string[];
	pagination: Pagination;
};

export type Pagination = {
	page: number;
	pageSize: number;
	pageCount: number;
	total: number;
};
