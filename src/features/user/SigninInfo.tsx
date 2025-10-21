import useShowComponent from "@/utils/useShowComponent";

function SigninInfo() {
	const params = new URLSearchParams(location.search);
	const redirectPath = params.get("redirect");

	// For direct log in we do not need Login inf
	const time = redirectPath === null ? 0 : 500;

	const showInfo = useShowComponent(true, time);

	let infoText = "";
	if (redirectPath?.includes("orders")) {
		infoText = "Please Sign in to view your orders";
	}
	if (redirectPath?.includes("checkout")) {
		infoText = "Please Sign in to continue checkout";
	}

	return <div className={`flex justify-center mt-5 md:mt-10 text-4xl transition-all duration-3000 ${showInfo ? "scale-100 opacity-100" : "scale-0 opacity-0 "}`}>{infoText}</div>;
}

export default SigninInfo;
