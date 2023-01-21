import { MouseEvent } from 'react'
import { useForm } from 'react-hook-form'

import { PropsUseModalForm } from './Modal.interface'
import { IOperation } from './field/operation-field.interface'

export const useModalForm = ({
	accountNumber,
	operationQuery,
	onClose
}: PropsUseModalForm) => {
	const {
		register: registerInput,
		handleSubmit,
		reset,
		formState
	} = useForm<IOperation>({
		mode: 'onChange'
	})

	const onSubmit = (data: IOperation) =>
		operationQuery?.mutate({
			accountNumber: accountNumber,
			amount: Number(data.amount)
		})

	const handleCloseClick = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		onClose()
	}
	return { onSubmit, handleCloseClick, registerInput, handleSubmit, formState,reset }
}
