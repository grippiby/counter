import React, { useCallback, useEffect, useState } from 'react'
import { MyButton } from '../Buttons/MyButton'
import { useDispatch, useSelector } from 'react-redux'
import { AppRootStateType } from '../store/index'
import { CorrectValuesType } from '../AppWithRedux'
import { IncrementAC, ResetCounterAC } from '../store/counter/counter-actions'
import { counterWithMinMax } from '../store/counter/counter-selectors'
import { AllCounterValuesType } from '../store/counter/counter-reducer'

interface CounterPanelProps {
	editMode: boolean
	setEditMode: (arg: boolean) => void
	error: CorrectValuesType
}

export const Counter: React.FC<CounterPanelProps> = (props) => {
	let myCounter = useSelector<AppRootStateType, AllCounterValuesType>(
		counterWithMinMax
	)
	const dispatch = useDispatch()
	const [minValue, maxValue] = myCounter.values

	useEffect(() => {
		if (props.editMode) {
			setError(false)
		}
	}, [minValue])

	const [error, setError] = useState(true)

	const [addButtonDisable, setAddButtonDisable] = useState(false)
	const [resetButtonDisable, setResetButtonDisable] = useState(true)

	const resetCount = useCallback(() => {
		//hardcode
		dispatch(ResetCounterAC())
		setAddButtonDisable(false)
		setResetButtonDisable(true)
	}, [dispatch])

	const increment = useCallback(() => {
		if (minValue === maxValue - 1) {
			setAddButtonDisable(true)
		}
		setResetButtonDisable(false)
		dispatch(IncrementAC(minValue + 1))
	}, [dispatch, minValue])

	const settings = () => props.setEditMode(false)

	const stopCount = minValue < maxValue ? '' : 'red'

	return (
		<>
			<div className="wrapper">
				<div className="table">
					<span className={stopCount}>My count is: {minValue}</span>
				</div>
				<div className="table">
					<div className="button-wrapper">
						<MyButton
							title={'Reset'}
							callBack={resetCount}
							disabled={resetButtonDisable}
						></MyButton>
						<MyButton
							title={'Add'}
							callBack={increment}
							disabled={addButtonDisable}
						></MyButton>
						<MyButton
							title={'Set'}
							callBack={settings}
							disabled={false}
						></MyButton>
					</div>
				</div>
			</div>
		</>
	)
}
