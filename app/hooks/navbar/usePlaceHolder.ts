import { useState } from "react";

const usePlaceHolder = () => {
	const [placeHolder, setPlaceHolder] = useState<string>("Search");

	const onFocusPlaceHolder = () => {
		setPlaceHolder("Start typing to search");
	};

	const resetPlaceHolder = () => {
		setPlaceHolder("Search");
	};

	return {
		placeHolder,
		onFocusPlaceHolder,
		resetPlaceHolder
	};
};

export default usePlaceHolder;
