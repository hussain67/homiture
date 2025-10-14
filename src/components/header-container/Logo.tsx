import { Link } from "react-router-dom";
// import logoLight from "../assets/logo-light.png";
// import logoDark from "../assets/logo-dark.png";
import logoLight from "../../assets/logo-light.png";
import logoDark from "../../assets/logo-dark.png";
import { useAppSelector } from "@/hooks";
function Logo() {
	const { theme } = useAppSelector(state => state.themeState);
	return (
		<Link
			to="/"
			className="hidden md:block"
		>
			<img
				className="w-[52px]"
				src={theme === "dark" ? logoDark : logoLight}
				alt=""
			/>
		</Link>
	);
}

export default Logo;
