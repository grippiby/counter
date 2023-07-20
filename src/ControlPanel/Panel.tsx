import React, { useEffect, useState } from 'react'
import { MyInput } from '../Inputs/MyInput'
import { MyButton } from '../Buttons/MyButton'
import { useDispatch, useSelector } from 'react-redux'
import { AppRootStateType } from '../store'
import { CorrectValuesType } from '../AppWithRedux'
import { SetValuesAC } from '../store/counter/counter-actions'
import { AllCounterValuesType } from '../store/counter/counter-reducer'

interface ControlPanelProps {
	editMode: boolean
	setEditMode: (e: boolean) => void
	setError: (e: CorrectValuesType) => void
	error: CorrectValuesType
}

export const Panel: React.FC<ControlPanelProps> = (props) => {
	let myCounter = useSelector<AppRootStateType, AllCounterValuesType>(
		(state) => state.counter
	)
	const dispatch = useDispatch()

	const [min, max] = myCounter.defaultVal
	const [maxValue, setMaxValue] = useState(max)
	const [minValue, setMinValue] = useState(min)

	const [buttonDisable, setButtonDisable] = useState(true)

	useEffect(() => {
		props.setError('Correct')
		props.setEditMode(false)
		setButtonDisable(false)
		if (
			minValue < 0 ||
			minValue >= maxValue ||
			(minValue < 0 && maxValue < 0)
		) {
			props.setError('Incorrect')
			setButtonDisable(true)
		}
	}, [minValue, maxValue])

	const onClickHandler = () => {
		dispatch(SetValuesAC(minValue, maxValue))
		setButtonDisable(true)
		props.setEditMode(true)
	}
	const incorrectValue = props.error === 'Correct' ? '' : 'red'
	return (
		<>
			<div className="wrapper">
				<span className={incorrectValue}>
					{props.error === 'Correct'
						? 'Enter values and press SET'
						: 'Incorrect Values'}
				</span>

				<div className="table">
					<MyInput
						title={maxValue}
						setTitle={setMaxValue}
						redInput={
							minValue >= maxValue ||
							(minValue < 0 &&
								maxValue < 0 &&
								maxValue > minValue)
						}
					>
						max value
					</MyInput>
					<MyInput
						title={minValue}
						setTitle={setMinValue}
						redInput={minValue < 0 || minValue >= maxValue}
					>
						start value
					</MyInput>
				</div>
				<div></div>
				<div className="table">
					<div className="button-wrapper">
						<MyButton
							title={'Set'}
							callBack={onClickHandler}
							disabled={buttonDisable}
						></MyButton>
					</div>
				</div>
			</div>
		</>
	)
}
