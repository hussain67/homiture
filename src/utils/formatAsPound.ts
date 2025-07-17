export const formatAsPound = (price: string | number): string => {
	const poundsAmount = new Intl.NumberFormat("en-UK", {
		style: "currency",
		currency: "GBP"
	}).format(Number(price) / 100);
	return poundsAmount;
};
