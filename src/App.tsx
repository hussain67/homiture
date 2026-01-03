import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/reactQuery";
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
import Product from "./pages/Product";
import ProtectedRoute from "./components/ProtectedRoute";
import Signout from "./features/user/Signout";
import NewOrder from "./pages/NewOrder";

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
							path="/checkout"
							element={
								<ProtectedRoute>
									<Checkout />
								</ProtectedRoute>
							}
						/>

						<Route
							path="/new-order"
							element={
								<ProtectedRoute>
									<NewOrder />
								</ProtectedRoute>
							}
						/>
						<Route
							path="/orders"
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
