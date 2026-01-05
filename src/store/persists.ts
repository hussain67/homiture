import { userInitialState } from "@/features/user/userSlice";
import { cartInitialState } from "@/features/cart/cartSlice";
import { themeInitialState } from "@/features/theme/themeSlice";

// Initial states
const initialStates = {
	theme: themeInitialState,
	cart: cartInitialState,
	user: userInitialState
};

// Get state from local storage
export function loadState<K extends keyof typeof initialStates>(key: K): (typeof initialStates)[K] {
	try {
		const serializedState = localStorage.getItem(key);
		if (!serializedState) return initialStates[key];

		const parsed = JSON.parse(serializedState);

		// merge with initial state in case some fields are missing
		return { ...initialStates[key], ...parsed };
	} catch {
		return initialStates[key];
	}
}

// Set State in local storage

export function saveState<T>(key: string, state: T) {
	localStorage.setItem(key, JSON.stringify(state));
}

// Clear state from local storage

export function clearState(key: string) {
	localStorage.removeItem(key);
}
