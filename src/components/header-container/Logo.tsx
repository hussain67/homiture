import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";

function Logo() {
	return (
		<Link
			to="/"
			className=""
		>
			<div className="bg-blue-500  flex px-3 py-2 items-center tracking-widest text-white rounded-sm ">
				<span className="text-2xl">
					<FiHome className="text5xl" />
				</span>
				<h1>
					<span className="text-2xl ">iture</span>
					<span className=" font-extrabold">.</span>

					<span className="text-black">com</span>
				</h1>
			</div>
		</Link>
	);
}

export default Logo;
