import { INCREMENT, RESET_COUNTER, SET_VALUES } from './counter-constants'

export type ResetCounterActionType = {
	type: 'RESET_COUNTER'
}

export type IncrementActionType = {
	type: 'INCREMENT'
	minValue: number
}

export type SetValuesActionType = {
	type: 'SET_VALUES'
	minValue: number
	maxValue: number
	defaultVal: [minValue: number, maxValue: number]
}

export const IncrementAC = (minValue: number): IncrementActionType => {
	return {
		type: INCREMENT,
		minValue: minValue,
	}
}

export const ResetCounterAC = (): ResetCounterActionType => {
	return {
		type: RESET_COUNTER,
	}
}

export const SetValuesAC = (
	minValue: number,
	maxValue: number
): SetValuesActionType => {
	return {
		type: SET_VALUES,
		minValue: minValue,
		maxValue: maxValue,
		defaultVal: [minValue, maxValue],
	}
}
