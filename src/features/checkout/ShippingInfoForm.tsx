import type { ShippingInfo } from "@/features/checkout/CheckoutFlow";
import { useForm } from "react-hook-form";

function ShippingInfoForm({ setInfo }: { setInfo: React.Dispatch<React.SetStateAction<ShippingInfo>> }) {
	const { register, handleSubmit } = useForm<ShippingInfo>();

	// Submit function
	function onSubmit(data: ShippingInfo) {
		const name = data.name;
		const address = data.address;
		setInfo({
			name,
			address
		});
	}

	return (
		<div className="bg-muted  p-4">
			<h2 className="text-center text-xl mb-6">Shipping Information</h2>
			<form
				className="flex flex-col gap-3"
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className="">
					<label
						htmlFor="name"
						className="block mb-1"
					>
						Name
					</label>
					<input
						type="text"
						id="name"
						{...register("name")}
						className="border-1 border-slate-300 w-full p-1"
					/>
				</div>
				<div className="">
					<label
						htmlFor="address"
						className="block mb-1"
					>
						Address
					</label>
					<input
						type="text"
						id="address"
						{...register("address")}
						className="border-1 border-slate-300 w-full p-1"
					/>
				</div>
				<div>
					<button
						type="submit"
						className="mt-4 bg-blue-500 text-white px-3 py-1 tracking-wider rounded-md cursor-pointer"
					>
						Add Shipping Info
					</button>
				</div>
			</form>
		</div>
	);
}

export default ShippingInfoForm;
