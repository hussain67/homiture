import type { UseFormRegister, UseFormWatch } from "react-hook-form";
import type { FormInput } from "@/features/products/all-products/ProductFilter";
import { formatAsPound } from "@/utils/formatAsPound";
type RangePropsType = {
	register: UseFormRegister<FormInput>;
	watch: UseFormWatch<FormInput>;
};

function Range({ register, watch }: RangePropsType) {
	const price = watch("price");
	return (
		<div>
			<label className="flex justify-between">
				Price: <span className="font-bold block"> {formatAsPound(price)}</span>
			</label>

			<input
				type="range"
				min="0"
				max="100000"
				step="5"
				{...register("price", { valueAsNumber: true })}
				className="w-full accent-blue-600"
			/>
		</div>
	);
}

export default Range;

// type RangePropType = {
// 	Controller:Controller<FormInput>;
// 	control:;
// 	register:UseFormRegister<FormInput>;
// }

// function Range({ Controller, control, register }) {
// 	return (
// 		<div>
// 			<Controller
// 				name="price"
// 				control={control}
// 				render={({ field }) => (
// 					<>
// 						<label className=" font-medium flex justify-between">
// 							Price: <span className="font-bold">{field.value}</span>
// 						</label>
// 						<input
// 							type="range"
// 							min="0"
// 							max="100000"
// 							step="10"
// 							{...field}
// 							{...register("price")}
// 							className="w-full accent-blue-600"
// 						/>
// 					</>
// 				)}
// 			/>
// 		</div>
// 	);
// }

// export default Range;
