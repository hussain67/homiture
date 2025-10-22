import { useAppSelector } from "@/hooks";
import { Link } from "react-router-dom";

import CartButton from "./CartButton";
import ThemeButton from "../../features/theme/ThemeButton";
import SignoutButton from "@/features/user/SignoutButton";

function HeaderActions() {
	const userName = useAppSelector(state => state.userState.user?.userName);

	return (
		<section className=" flex gap-5  items-center mr-3">
			<div>
				{userName && (
					<div className="flex gap-6 capitalize">
						<span>Hello {userName}</span>
						<SignoutButton />
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
