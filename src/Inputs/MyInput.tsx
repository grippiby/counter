import React, { ChangeEvent } from 'react'

interface InputsProps {
	title: number
	setTitle: (title: number) => void
	redInput: boolean
	children: string
}

export const MyInput: React.FC<InputsProps> = (props) => {
	const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
		props.setTitle(+event.currentTarget.value)
		/*console.log(event.currentTarget.value)*/
	}
	const error = props.redInput ? 'redInput' : ''
	return (
		<div className="input-wrapper">
			<div>{props.children}</div>
			<input
				className={error}
				type="number"
				onChange={onChangeInputHandler}
				value={props.title}
			/>
		</div>
	)
}
