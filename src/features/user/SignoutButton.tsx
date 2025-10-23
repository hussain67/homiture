import { useNavigate } from "react-router-dom";

function SignoutButton() {
	const navigate = useNavigate();
	function handleClick() {
		navigate("/signout");
	}
	return (
		<button
			className="cursor-pointer"
			onClick={handleClick}
		>
			Signout
		</button>
	);
}

export default SignoutButton;
