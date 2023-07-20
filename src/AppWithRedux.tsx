import React, { useState } from 'react'
import './App.css'
import { Panel } from './ControlPanel/Panel'
import { Counter } from './CounterPanel/Counter'

export type CorrectValuesType = 'Correct' | '' | 'Incorrect'

export const AppWithRedux = () => {
	const [editMode, setEditMode] = useState(false)
	const [error, setError] = useState<CorrectValuesType>('Correct')

	return (
		<>
			{!editMode ? (
				<Panel
					error={error}
					editMode={editMode}
					setEditMode={setEditMode}
					setError={setError}
				/>
			) : (
				<Counter
					editMode={editMode}
					setEditMode={setEditMode}
					error={error}
				/>
			)}
		</>
	)
}
