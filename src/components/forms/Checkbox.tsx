import type { FormInput } from "@/features/products/all-products/ProductFilter";
import type { UseFormRegister } from "react-hook-form";
function Checkbox({ register }: { register: UseFormRegister<FormInput> }) {
	return (
		<div className="flex justify-between items-center ">
			<label htmlFor="shipping">Free shipping</label>
			<input
				type="checkbox"
				id="shipping"
				{...register("shipping")}
				className="w-5 h-5 rounded-sm cursor-pointer"
			/>
		</div>
	);
}

export default Checkbox;
