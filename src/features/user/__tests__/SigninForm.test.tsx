import SigninForm from "../SigninForm";
import { render, screen } from "@testing-library/react";
import userEvent, { type UserEvent } from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";

const signin = vi.fn();

// Mock the Route
vi.mock("../useSignin", () => ({
	useSignin: () => ({
		// Mock the function
		signin,
		isPending: false,
		error: null
	})
}));

const getElements = () => ({
	submitButton: screen.getByRole("button", { name: /sign in/i }),
	emailInput: screen.getByLabelText(/email/i),
	passwordInput: screen.getByLabelText(/password/i),
	alerts: screen.getAllByRole("alert")
});

function renderWithProviders(ui: React.ReactElement) {
	return render(<MemoryRouter>{ui}</MemoryRouter>);
}

describe("SigninForm test", () => {
	let user: UserEvent;

	// Clear mock function
	beforeEach(() => {
		signin.mockClear();
	});

	it("shows errors if form is submitted without proper input", async () => {
		renderWithProviders(<SigninForm />);
		user = userEvent.setup();
		const { submitButton, alerts } = getElements();
		await user.click(submitButton);

		// both error messages should appear
		expect(alerts).toHaveLength(2);

		// inputs should be marked invalid
		expect(screen.getByLabelText(/email/i)).toHaveAttribute("aria-invalid", "true");
		expect(screen.getByLabelText(/password/i)).toHaveAttribute("aria-invalid", "true");
	});
	it("Submits form with valid data", async () => {
		user = userEvent.setup();
		renderWithProviders(<SigninForm />);
		const { emailInput, passwordInput, submitButton } = getElements();
		await user.type(emailInput, "test@test.com");
		await user.type(passwordInput, "123456");
		await user.click(submitButton);
		expect(signin).toHaveBeenCalledWith({
			email: "test@test.com",
			password: "123456"
		});
	});
});

// function renderWithProviders(ui: React.ReactElement) {
// 	return render(
// 		<MemoryRouter>
// 			<QueryClientProvider client={queryClient}>
// 				<Provider store={store}>{ui}</Provider>
// 			</QueryClientProvider>
// 		</MemoryRouter>
// 	);
// }
