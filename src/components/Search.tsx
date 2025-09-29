import type { FormInput } from "@/features/products/all-products/ProductFilter";
import type { UseFormRegister } from "react-hook-form";

function Search({ register }: { register: UseFormRegister<FormInput> }) {
	return (
		<div>
			<label
				htmlFor="search"
				className="block mb-1"
			>
				{" "}
				Search Product
			</label>
			<input
				type="text"
				id="search"
				{...register("search")}
				className="border-[.5px] border-slate-300 px-3 py-2 rounded-sm w-full"
			/>
		</div>
	);
}

export default Search;
