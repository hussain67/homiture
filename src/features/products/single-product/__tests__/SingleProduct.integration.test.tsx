import { screen } from "@testing-library/react";
import SingleProduct from "../SingleProduct";
import RenderWithProviders from "@/__tests__/Test-utils";
import { Routes, Route } from "react-router-dom";
describe("Single product", () => {
	test("Display a product", async () => {
		RenderWithProviders(
			<Routes>
				<Route
					path="/api/products/:productId"
					element={<SingleProduct />}
				/>
			</Routes>,
			{ route: "/api/products/123" }
		);

		expect(await screen.findByText("Modern Chair")).toBeInTheDocument();
	});
});
