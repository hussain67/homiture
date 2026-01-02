import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { store } from "@/store";
type Options = {
	route?: string;
};

export default function renderWithProviders(ui: React.ReactNode, { route = "/" }: Options = {}) {
	const queryClient = new QueryClient({
		defaultOptions: { queries: { retry: false } }
	});

	return render(
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>
			</QueryClientProvider>
		</Provider>
	);
}
