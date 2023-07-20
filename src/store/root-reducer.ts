import { combineReducers } from 'redux'
import { counter } from './counter/counter-reducer'

export const rootReducer = combineReducers({
	counter,
})
