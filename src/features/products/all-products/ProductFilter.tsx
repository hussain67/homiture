import { useForm } from "react-hook-form";
import { useAllProducts } from "./useAllProducts";
import { Link, useSearchParams } from "react-router-dom";
import Search from "@/components/forms/Search";
import Select from "@/components/forms/Select";
import Range from "@/components/forms/Range";
import Checkbox from "@/components/forms/Checkbox";

export type FormInput = {
	company: string;
	search: string;
	category: string;
	order: string;
	price: number;
	shipping: string;
};
function ProductFilter() {
	const { register, handleSubmit, watch } = useForm<FormInput>({
		defaultValues: {
			price: 100000
		}
	});
	const [searchParams, setSearchParams] = useSearchParams();
	const { data } = useAllProducts();

	// console.log(data);

	function onSubmit(data: FormInput) {
		const price = data.price * 100;

		searchParams.set("company", data.company);
		searchParams.set("search", data.search);
		searchParams.set("category", data.category);
		searchParams.set("order", data.order);
		searchParams.set("price", String(price));
		searchParams.set("shipping", data.shipping);
		searchParams.set("page", "1");

		setSearchParams(searchParams);
		// console.log(data);
	}
	if (!data) {
		return;
	}
	const { companies = [], categories = [] } = data.meta;
	// console.log(companies);

	return (
		<section>
			<form onSubmit={handleSubmit(onSubmit)}>
				<article className="grid items-center gap-4 border-1 border-slate-400 p-4 mb-10 ">
					<Search register={register} />

					<Select
						options={categories}
						register={register}
						name="category"
					/>

					<Select
						options={companies}
						register={register}
						name="company"
					/>

					{/* <Select
						options={["a-z", "z-a", "high", "low"]}
						register={register}
						name="order"
					/> */}

					<Range
						register={register}
						watch={watch}
					/>
					<Checkbox register={register} />

					<button
						type="submit"
						className="bg-blue-600 text-white px-3 py-1 w-full rounded-sm cursor-pointer"
					>
						Search
					</button>

					<button className="border-[1px] border-slate-300  px-3 py-1 w-full rounded-sm cursor-pointer">
						<Link to="/products">Reset</Link>
					</button>
				</article>
			</form>
		</section>
	);
}

export default ProductFilter;
