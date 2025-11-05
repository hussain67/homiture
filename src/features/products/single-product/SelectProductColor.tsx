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
					// key={color}
					// style={{ backgroundColor: color }}
					// className={`w-6 h-6  rounded-full mr-3  cursor-pointer ${color === productColor ? " ring-2 ring-blue-600 " : ""} `}
					// onClick={() => setProductColor(color)}
					>
						<div
							key={color}
							className={`w-6 h-6 rounded-full mr-3 cursor-pointer flex items-center justify-center 
 						   ${color === productColor ? "border-2 border-blue-600" : ""}`}
							onClick={() => setProductColor(color)}
						>
							<div
								className="w-4 h-4 rounded-full"
								style={{ backgroundColor: color }}
							></div>
						</div>
					</button>
				))}
			</div>
		</div>
	);
}

export default SelectProductColor;
