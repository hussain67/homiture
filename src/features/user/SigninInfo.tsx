import useShowComponent from "@/utils/useShowComponent";

function SigninInfo() {
	const params = new URLSearchParams(location.search);
	const redirectPath = params.get("redirect");

	const time = redirectPath === null ? 0 : 900;

	const showInfo = useShowComponent(true, time);

	let infoText = "";
	if (redirectPath?.includes("orders")) {
		infoText = "Please Sign in to view your orders";
	}
	if (redirectPath?.includes("checkout")) {
		infoText = "Please Sign in to continue checkout";
	}

	return <div className={`flex justify-center mt-5 md:mt-10 text-2xl ${showInfo ? "scale-100 opacity-100" : "scale-0 opacity-0 transition-all duration-1500"}`}>{infoText}</div>;
}

export default SigninInfo;
