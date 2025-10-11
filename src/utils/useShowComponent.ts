import { useState } from "react";

function useShowComponent(show: boolean, time: number) {
	const [showComponent, setShowComponent] = useState(show);

	setTimeout(() => {
		setShowComponent(!show);
	}, time);
	return showComponent;
}

export default useShowComponent;
