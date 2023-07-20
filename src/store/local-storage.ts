import { AllCounterValuesType } from './counter/counter-reducer'

export const loadState = () => {
	try {
		const savedState = localStorage.getItem('defaultValues')
		if (savedState === null) {
			return undefined
		}
		return JSON.parse(savedState)
	} catch (error) {
		return undefined
	}
}
export const saveState = (state: AllCounterValuesType) => {
	try {
		const stateToBeSaved = JSON.stringify(state)
		localStorage.setItem('defaultValues', stateToBeSaved)
	} catch (error) {
		console.error(error)
	}
}
