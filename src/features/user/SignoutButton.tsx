import { Button } from "@/components/buttons/button";
import { useNavigate } from "react-router-dom";

function SignoutButton() {
	const navigate = useNavigate();
	function handleClick() {
		navigate("/signout");
	}
	return (
		<Button
			variant="link"
			className="border-none text-md "
			onClick={handleClick}
		>
			Sign out
		</Button>
	);
}

export default SignoutButton;
