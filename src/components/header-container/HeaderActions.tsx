import { useAppSelector } from "@/hooks";
import { Link, useNavigate } from "react-router-dom";

import CartButton from "./CartButton";
import ThemeButton from "./ThemeButton";

function HeaderActions() {
	const userName = useAppSelector(state => state.userState.user?.userName);
	const navigate = useNavigate();

	function handleSignout() {
		navigate("/signout");
	}
	return (
		<section className=" flex gap-5  items-center mr-3">
			<div>
				{userName && (
					<div className="flex gap-6 capitalize">
						<span>Hello {userName}</span>
						<button
							className="cursor-pointer"
							onClick={handleSignout}
						>
							Signout
						</button>
					</div>
				)}
				{!userName && (
					<div className="flex gap-3">
						<Link to="/signin">Signin </Link>
						{"/"}
						<Link to="/signup">Signup</Link>
					</div>
				)}
			</div>

			<ThemeButton />
			<CartButton />
		</section>
	);
}

export default HeaderActions;
