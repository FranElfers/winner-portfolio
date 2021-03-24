import { useEffect, useState } from "react";

export default function useDebounce(value,delay) {
	const [ debouncedValue, setDebouncedValue ] = useState(value);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value);
			console.log(value,delay);
		}, delay)

		return () => {
			clearTimeout(handler)
		}
	}, [value])

	return debouncedValue
}