import { render, screen } from "@testing-library/react";
import { useParams } from "react-router-dom";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import SingleProduct from "../SingleProduct";
import { useSingleProduct } from "../useSingleProduct";
import type { Product, SingleProductResponse } from "@/types/productTypes";

vi.mock("react-router-dom", async () => {
	const actual = await vi.importActual("react-router-dom");
	return {
		...actual,
		useParams: vi.fn()
	};
});
vi.mock("../useSingleProduct");
vi.mock("@/components/Spinner", () => ({
	default: () => <div>Loading...</div>
}));
vi.mock("../SelectProduct", () => ({
	default: ({ productInfo }: any) => <div>Product: {productInfo.title}</div>
}));
const mockedUseSingleProducts = vi.mocked(useSingleProduct);
const mockedUseParams = vi.mocked(useParams);

describe("SingleProduct - unit test", () => {
	beforeEach(() => {
		mockedUseParams.mockReturnValue({ productId: "123" });
	});
	it("renders Spinner while loading", () => {
		mockedUseSingleProducts.mockReturnValue({
			isLoading: true,
			error: null,
			data: undefined
		});
		render(<SingleProduct />);

		expect(screen.getByText("Loading...")).toBeInTheDocument();
	});

	it("renders error message when request fails", () => {
		mockedUseSingleProducts.mockReturnValue({
			isLoading: false,
			error: new Error("Product could not be loaded"),
			data: undefined
		});

		render(
			<MemoryRouter initialEntries={["/products/123"]}>
				<Routes>
					<Route
						path="/products/:productId"
						element={<SingleProduct />}
					/>
				</Routes>
			</MemoryRouter>
		);

		expect(screen.getByText("Product could not be loaded")).toBeInTheDocument();
	});
	it("renders SelectProduct when data is available", () => {
		mockedUseSingleProducts.mockReturnValue({
			isLoading: false,
			error: null,
			data: {
				data: {
					id: "123",
					attributes: {
						title: "Modern Chair",
						company: "Ikea",
						description: "",
						featured: false,
						createdAt: "",
						updatedAt: "",
						publishedAt: "",
						category: "",
						image: "",
						price: "199",
						shipping: true,
						colors: []
					}
				}
			}
		});

		render(<SingleProduct />);

		expect(screen.getByText("Product: Modern Chair")).toBeInTheDocument();
	});
});
