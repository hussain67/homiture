import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";

function Logo() {
	return (
		<Link
			to="/"
			className=""
		>
			<div className="bg-blue-500  flex px-2 sm:px-3 py-1 sm:py-2 items-center tracking-widest text-white rounded-sm ">
				<span className="text-lg sm:text-2xl">
					<FiHome className="" />
				</span>
				<h1>
					<span className="text-xl sm:text-2xl ">iture</span>
				</h1>
			</div>
		</Link>
	);
}

export default Logo;
