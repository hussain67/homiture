import SigninInfo from "@/features/user/SigninInfo";
import SigninForm from "@/features/user/SigninForm";

function Signin() {
	return (
		<section className="flex flex-col h-screen">
			<SigninInfo />
			<SigninForm />
		</section>
	);
}

export default Signin;
