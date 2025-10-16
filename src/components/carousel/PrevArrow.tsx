import { FiChevronLeft } from "react-icons/fi";

const PrevArrow = ({ onClick }: { onClick?: () => void | null }) => {
	return (
		<button
			onClick={onClick}
			className="absolute left-1 top-1/2 -translate-y-1/2 z-10 bg-gray-800/70 hover:bg-gray-900 text-white p-2 rounded-full shadow-md transition cursor-pointer"
		>
			<FiChevronLeft className="w-5 h-5" />
		</button>
	);
};
export default PrevArrow;
