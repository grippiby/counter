import React from 'react'

type ButtonsProps = {
	title: string
	callBack: () => void
	disabled: boolean
}
export const MyButton: React.FC<ButtonsProps> = (props) => {
	const onClickHandler = () => {
		props.callBack()
	}
	return (
		<>
			<button onClick={onClickHandler} disabled={props.disabled}>
				{props.title}
			</button>
		</>
	)
}
