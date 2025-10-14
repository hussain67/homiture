import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";

type FormInput = {
	search: string;
};

function ProductSearch() {
	const { register, handleSubmit } = useForm<FormInput>();
	const [searchParams, setSearchParams] = useSearchParams();

	// Function onSubmit
	function onSubmit(data: FormInput) {
		searchParams.set("search", data.search);

		setSearchParams(searchParams);
	}
	return (
		<div>
			<form
				onChange={handleSubmit(onSubmit)}
				className="ml-auto"
			>
				<input
					type="text"
					id="search"
					{...register("search")}
					className="border-[.5px] border-slate-300 px-3 py-2 rounded-sm w-full"
				/>
			</form>
		</div>
	);
}

export default ProductSearch;
