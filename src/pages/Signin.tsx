import SigninInfo from "@/features/user/SigninInfo";
import SigninUser from "@/features/user/SigninUser";

function Signin() {
	return (
		<section className="flex flex-col h-screen">
			<SigninInfo />
			<SigninUser />
		</section>
	);
}

export default Signin;
