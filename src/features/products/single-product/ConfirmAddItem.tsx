import useShowComponent from "@/utils/useShowComponent";

function ConfirmAddItem() {
	const isShowInfo = useShowComponent(true, 500);
	return (
		<div className={`absolute -top-3 md:-top-1/5 left-1/2 -translate-x-1/2 border-2 border-slate-300 py-10 px-15 duration-2500 transition-transform bg-muted ${isShowInfo ? "scale-100 " : "scale-0 "}`}>
			<h1 className="text-green-600 text-3xl text-center">Item added, continue shopping</h1>
		</div>
	);
}

export default ConfirmAddItem;
