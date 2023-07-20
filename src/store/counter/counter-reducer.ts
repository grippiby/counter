import {
	IncrementActionType,
	ResetCounterActionType,
	SetValuesActionType,
} from './counter-actions'
import { INCREMENT, RESET_COUNTER, SET_VALUES } from './counter-constants'

export type ActionType =
	| IncrementActionType
	| ResetCounterActionType
	| SetValuesActionType

export type ValuesTypes = [minValue: number, maxValue: number]

let initialState: AllCounterValuesType = {
	values: [0, 3],
	defaultVal: [0, 3],
}

export type AllCounterValuesType = {
	values: ValuesTypes
	defaultVal: ValuesTypes
}
export const counter = (
	state = initialState,
	action: ActionType
): AllCounterValuesType => {
	switch (action.type) {
		case INCREMENT:
			return {
				...state,
				values: [(state.values[0] = action.minValue), state.values[1]],
			}
		case RESET_COUNTER:
			return {
				...state,
				values: [state.defaultVal[0], state.defaultVal[1]],
			}
		case SET_VALUES:
			return {
				...state,
				values: [action.minValue, action.maxValue],
				defaultVal: [action.minValue, action.maxValue],
			}

		default:
			return state
	}
}
