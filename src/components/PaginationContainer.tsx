function PaginationContainer() {
	const pageCount = 10;
	const pageNumbers = Array.from({ length: pageCount }, (_, index) => {
		return index + 1;
	});
	// console.log(pages);
	return (
		<div>
			{pageNumbers.map(pageNumber => (
				<button
					key={pageNumber}
					className="bg-muted"
				>
					{pageNumber}
				</button>
			))}
		</div>
	);
}

export default PaginationContainer;
