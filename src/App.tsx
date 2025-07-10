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
import Register from "./pages/Register";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
							path="login"
							element={<Login />}
						/>
						<Route
							path="orders"
							element={<Orders />}
						/>
						<Route
							path="register"
							element={<Register />}
						/>
						<Route
							path="error"
							element={<Error />}
						/>
						<Route
							path="products"
							element={<Products />}
						/>
					</Route>
				</Routes>
			</BrowserRouter>
		</QueryClientProvider>
	);
}

export default App;
