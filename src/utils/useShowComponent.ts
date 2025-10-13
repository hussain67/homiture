import { useEffect, useState } from "react";

function useShowComponent(show: boolean, time: number) {
	const [showComponent, setShowComponent] = useState(show);

	useEffect(() => {
		setTimeout(() => {
			setShowComponent(!show);
		}, time);
	}, [time, show]);

	return showComponent;
}

export default useShowComponent;
