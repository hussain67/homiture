type SelectProductAmountProps = {
	productAmount: number;
	setProductAmount: React.Dispatch<React.SetStateAction<number>>;
};
function SelectProductAmount({ productAmount, setProductAmount }: SelectProductAmountProps) {
	return (
		<div>
			<h1 className="mb-3 font-semibold text-lg">Amount</h1>
			<select
				value={productAmount}
				onChange={e => setProductAmount(Number(e.target.value))}
			>
				{Array.from({ length: productAmount ? productAmount + 10 : 10 }, (_, index) => (
					<option
						key={index}
						value={index + 1}
					>
						{index + 1}
					</option>
				))}
			</select>
		</div>
	);
}

export default SelectProductAmount;
