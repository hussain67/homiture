import type { Theme } from "@/types/themeTypes";

export function applyTheme(theme: Theme) {
	const root = window.document.documentElement;
	root.classList.remove("light", "dark");
	root.classList.add(theme as string);
}
