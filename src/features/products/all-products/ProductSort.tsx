import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { useAllProducts } from "./useAllProducts";

export type FormInput = {
	order: string;
};
function ProductSort() {
	const { register, handleSubmit } = useForm<FormInput>();

	const [searchParams, setSearchParams] = useSearchParams();
	const { data } = useAllProducts();
	console.log(data?.meta);
	const totalItems = data?.meta.pagination.total;
	function onSubmit(data: FormInput) {
		searchParams.set("order", data.order);

		setSearchParams(searchParams);
	}
	// if (!data) {
	// 	return <p className="text-red-500">No Data</p>;
	// }

	return (
		<section className="flex flex-col sm:flex-row items-center justify-between max-w-[350px] sm:max-w-none w-full mx-auto mb-2 border-1 border-slate-300 p-1">
			<h1 className=" text-center mb-2 sm:mb-0">Total {totalItems} products</h1>
			<div className="border-[.5px] border-slate-300  py-1 px-2 rounded-sm  ">
				<form onChange={handleSubmit(onSubmit)}>
					<div className=" flex items-center justify-center">
						<label htmlFor="order">
							<span className="mr-1"> Sort by</span>
							<select
								id="order"
								{...register("order")}
								className="border-none outline-none"
							>
								<option value="low">Price: Low to high</option>
								<option value="high">Price: High to low</option>
								<option value="a-z">a-z</option>
								<option value="z-a">z-a</option>
							</select>
						</label>
					</div>
				</form>
			</div>
		</section>
	);
}

export default ProductSort;
