import React, { useState } from "react";

const Counter = () => {
	const [count, setCount] = useState(0);

	const updateCounter = (x: string) => {
		const nextNumber = parseInt(x) + 1;
		setCount(nextNumber);
		setTimeout(updateCounter, 1000, [nextNumber]);
	};

	setTimeout(updateCounter, 1000, [count]);
	return <h1>{count}</h1>;
};

export default Counter;
