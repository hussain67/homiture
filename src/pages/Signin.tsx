import SigninInfo from "@/features/user/SigninInfo";
import SigninForm from "@/features/user/SigninForm";
import { useSearchParams } from "react-router-dom";

function Signin() {
	const [searchParams] = useSearchParams();
	const hasRedirect = searchParams.get("redirect");
	return (
		<section className="flex flex-col h-screen">
			{hasRedirect && <SigninInfo />}
			<SigninForm />
		</section>
	);
}

export default Signin;
