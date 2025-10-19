import { useEffect, useState } from "react";

function useShowComponent(show: boolean, time: number) {
	const [showComponent, setShowComponent] = useState(show);
	// For time 0 show component immediately becomes false
	// For any other time showComponent is true for that time
	useEffect(() => {
		const timer = setTimeout(() => {
			setShowComponent(!show);
		}, time);
		return () => clearTimeout(timer);
	}, [time, show]);

	return showComponent;
}

export default useShowComponent;
