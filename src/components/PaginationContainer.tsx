import { useSearchParams } from "react-router-dom";

function PaginationContainer({ pageCount }: { pageCount: number }) {
	const [searchParams, setSearchParams] = useSearchParams();
	const pageNumbers = Array.from({ length: pageCount }, (_, index) => {
		return index + 1;
	});

	const currentPage = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

	function setPageNumber(pageInfo: string | number) {
		if (pageInfo === "prev") {
			const prev = currentPage === 1 ? 1 : currentPage - 1;
			searchParams.set("page", String(prev));
		}
		if (pageInfo === "next") {
			const next = currentPage === pageCount ? currentPage : currentPage + 1;
			searchParams.set("page", String(next));
		} else if (typeof pageInfo === "number") {
			searchParams.set("page", String(pageInfo));
		}
		setSearchParams(searchParams);
	}
	if (pageCount < 2) return null;

	return (
		<div className="flex gap-2">
			<button
				onClick={() => setPageNumber("prev")}
				className={`bg-muted px-4 py-2 cursor-pointer disabled:cursor-not-allowed`}
				disabled={currentPage === 1}
			>
				Prev
			</button>
			{pageNumbers.map(pageNumber => (
				<button
					key={pageNumber}
					className={` px-4 py-2 cursor-pointer ${pageNumber === currentPage ? `bg-blue-500` : "bg-muted"}`}
					onClick={() => setPageNumber(pageNumber)}
				>
					{pageNumber}
				</button>
			))}
			<button
				onClick={() => setPageNumber("next")}
				disabled={currentPage === pageCount}
				className="bg-muted px-4 py-2 cursor-pointer disabled:cursor-not-allowed"
			>
				Next
			</button>
		</div>
	);
}

export default PaginationContainer;
