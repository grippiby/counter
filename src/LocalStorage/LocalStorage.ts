import { useEffect, useState } from 'react'

const decode = (value: any) => {
	return JSON.stringify(value)
}

const encode = (value: any) => {
	return JSON.parse(value)
}

// useLocalStorage hook
const useLocalStorage = (
	key: string,
	defaultState: string | number | boolean
) => {
	const [value, setValue] = useState(
		encode(localStorage.getItem(key) || null) || defaultState
	)

	useEffect(() => {
		localStorage.setItem(key, decode(value))
	}, [value])

	return [value, setValue]
}

export { useLocalStorage }
