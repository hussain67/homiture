import { Button } from "@/components/buttons/button";
import { useNavigate } from "react-router-dom";

function SignoutButton() {
	const navigate = useNavigate();
	function handleClick() {
		navigate("/signout");
	}
	return (
		<Button
			variant="outline"
			className="border-none text-lg"
			onClick={handleClick}
		>
			Sign out
		</Button>
	);
}

export default SignoutButton;
