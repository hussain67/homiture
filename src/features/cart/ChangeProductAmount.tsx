type SelectProductAmountProps = {
	productAmount: number;
	setProductAmount: React.Dispatch<React.SetStateAction<number>>;
};

function ChangeProductAmount({ productAmount, setProductAmount }: SelectProductAmountProps) {
	return (
		<div>
			<select
				value={productAmount}
				onChange={e => setProductAmount(Number(e.target.value))}
			>
				<option value={productAmount}>{productAmount}</option>
				{Array.from({ length: productAmount ? productAmount + 9 : 9 }, (_, index) => (
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

export default ChangeProductAmount;
