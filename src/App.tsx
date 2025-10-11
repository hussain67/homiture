import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Signin from "./pages/Signin";
import Orders from "./pages/Orders";
import Error from "./pages/Error";
import Signup from "./pages/Signup";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Product from "./pages/Product";
import LoginToCheckout from "./features/checkout/LoginToCheckout";
import ProtectedRoute from "./components/ProtectedRoute";
import Signout from "./features/user/Signout";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 60 * 1000
		}
	}
});

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={<AppLayout />}
					>
						<Route
							index
							element={<Home />}
						/>
						<Route
							path="home"
							element={<Home />}
						/>
						<Route
							path="about"
							element={<About />}
						/>
						<Route
							path="cart"
							element={<Cart />}
						/>
						<Route
							path="checkout"
							element={
								<ProtectedRoute>
									<Checkout />
								</ProtectedRoute>
							}
						/>
						<Route
							path="logintocheckout"
							element={<LoginToCheckout />}
						/>

						<Route
							path="orders"
							element={
								<ProtectedRoute>
									<Orders />
								</ProtectedRoute>
							}
						/>

						<Route
							path="products"
							element={<Products />}
						/>
						<Route
							path="products/:productId"
							element={<Product />}
						/>
					</Route>
					<Route
						path="signin"
						element={<Signin />}
					/>
					<Route
						path="signup"
						element={<Signup />}
					/>
					<Route
						path="signout"
						element={<Signout />}
					/>
					<Route
						path="*"
						element={<Error />}
					/>
				</Routes>
			</BrowserRouter>
		</QueryClientProvider>
	);
}

export default App;
