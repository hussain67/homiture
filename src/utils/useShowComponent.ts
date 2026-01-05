import { useEffect, useState } from "react";

function useShowComponent(show: boolean, time: number) {
	const [showComponent, setShowComponent] = useState(show);

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowComponent(!show);
		}, time);
		return () => clearTimeout(timer);
	}, [time, show]);

	return showComponent;
}

export default useShowComponent;
