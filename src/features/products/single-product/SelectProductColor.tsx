type SelectProductColorProps = {
	colors: string[];
	productColor: string;
	setProductColor: React.Dispatch<React.SetStateAction<string>>;
};

function SelectProductColor({ colors, productColor, setProductColor }: SelectProductColorProps) {
	return (
		<div>
			<h1 className="mb-3 font-semibold text-lg">Colors</h1>
			<div className="flex items-center">
				{colors.map(color => (
					<button
						key={color}
						style={{ backgroundColor: color }}
						className={`w-6 h-6 rounded-full mr-3  cursor-pointer ${color === productColor ? "border-black border-2 " : ""} `}
						onClick={() => setProductColor(color)}
					></button>
				))}
			</div>
		</div>
	);
}

export default SelectProductColor;
