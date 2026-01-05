import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "./utils/strip.utils.ts";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback.tsx";
import { store } from "./store/store.ts";
createRoot(document.getElementById("root")!).render(
	<ErrorBoundary
		FallbackComponent={ErrorFallback}
		onReset={() => window.location.replace("/")}
	>
		<Provider store={store}>
			<Elements stripe={stripePromise}>
				<App />
			</Elements>
		</Provider>
	</ErrorBoundary>
);
