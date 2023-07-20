import React from 'react'

type ButtonsProps = {
	count: number
	maxValue: number
	oneStepToIncrement: number
	setCount: (count: number) => void
	increment: () => void
	resetCount: () => void
}
export const Buttons: React.FC<ButtonsProps> = (props) => {
	return (
		<div className="button-wrapper">
			<button
				className="button"
				onClick={props.increment}
				disabled={props.count >= props.maxValue}
			>
				Add
			</button>
			<button
				className="button"
				onClick={props.resetCount}
				disabled={props.count === 0}
			>
				Reset
			</button>
		</div>
	)
}
