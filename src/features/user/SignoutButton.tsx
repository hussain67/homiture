import { useNavigate } from "react-router-dom";

function Signout() {
	const navigate = useNavigate();
	function handleClick() {
		navigate("/signout", { replace: true });
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

export default Signout;
