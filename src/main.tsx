import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./store.ts";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "./utils/strip.utils.ts";
createRoot(document.getElementById("root")!).render(
	<Provider store={store}>
		<Elements stripe={stripePromise}>
			<App />
		</Elements>
	</Provider>
);
