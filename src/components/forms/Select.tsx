import type { FormInput } from "@/features/products/all-products/ProductFilter";
import type { UseFormRegister } from "react-hook-form";

type SelectInput = {
	register: UseFormRegister<FormInput>;
	options: string[];
	name: "company" | "category" | "order";
};

function Select({ register, options, name }: SelectInput) {
	return (
		<div>
			<label
				htmlFor={name}
				className="block mb-1"
			>
				Select {name}
			</label>
			<select
				id={name}
				{...register(name)}
				className="border-[.4px] border-slate-300 w-full py-2 px-3 rounded-sm"
			>
				{options.map(option => (
					<option
						key={option}
						value={option}
						className="capitalize"
					>
						{option}
					</option>
				))}
			</select>
		</div>
	);
}

export default Select;
