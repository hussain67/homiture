import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
type FormInput = {
	search: string;
};

function Search() {
	const { register, handleSubmit, reset } = useForm<FormInput>();
	const navigate = useNavigate();

	// Function onSubmit
	function onSubmit(data: FormInput) {
		if (data.search === "") return;
		navigate(`/products?search=${encodeURIComponent(data.search)}`);
		reset();
	}
	return (
		<div className="px-[30px] md:px-0 md:w-[250px]">
			<form onSubmit={handleSubmit(onSubmit)}>
				<label
					htmlFor=""
					className="flex gap-2 border-[1px] border-blue-400 rounded-sm focus:border-0 "
				>
					<input
						type="text"
						id="search"
						{...register("search")}
						className="  focus:outline-[2px] focus:outline-blue-600 px-3 py-1 rounded-sm  block w-full"
					/>
					<button
						className="block cursor-pointer bg-blue-500 -ml-[48px] text-2xl px-2 rounded-r-sm
					"
					>
						<IoSearchSharp />
					</button>
				</label>
			</form>
		</div>
	);
}

export default Search;
