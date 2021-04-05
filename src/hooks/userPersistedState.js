import React, { useEffect } from 'react'

// usePersistedState('performance', true)
const usePersistedState = (name, defaultValue) => {
	const [ value, setValue ] = React.useState(defaultValue);
	const nameRef = React.useRef(name);

	useEffect(() => {
		try {
			const storedValue = localStorage.getItem(name);
			if (storedValue !== null) setValue(storedValue);
			else localStorage.setItem(name, defaultValue)
		} catch {
			setValue(defaultValue)
		}
	}, [])

	useEffect(() => {
		try {
			localStorage.setItem(nameRef.current, value)
		} catch { }
	}, [value])

	useEffect(() => {
		const lastName = nameRef.current;
		if (name !== lastName) {
			try {
				localStorage.setItem(name, value)
				nameRef.current = name;
				localStorage.removeItem(lastName)
			} catch { }
		}
	}, [name])

	return [ value, setValue ]
}

export default usePersistedState