import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import Error from "./pages/Error";
import Signup from "./pages/Signup";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Product from "./pages/Product";

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
							element={<Checkout />}
						/>

						<Route
							path="orders"
							element={<Orders />}
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
						path="login"
						element={<Login />}
					/>
					<Route
						path="signup"
						element={<Signup />}
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
