import { createStore } from 'redux'

import { rootReducer } from './root-reducer'
import { loadState, saveState } from './local-storage'

export type AppRootStateType = ReturnType<typeof rootReducer>

export const cofigureStore = () => {
	const persistedState = loadState()

	const store = createStore(rootReducer, persistedState)

	store.subscribe(() => {
		saveState(store.getState().counter)
	})
	return store
}
