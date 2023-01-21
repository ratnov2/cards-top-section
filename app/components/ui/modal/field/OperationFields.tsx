import { FC } from 'react'
import { FormState, UseFormRegister } from 'react-hook-form'

import OperationField from './OperationField'
import { IOperation } from './operation-field.interface'

type TypeOperationFieldsProps = {
	register: UseFormRegister<any>
	formState: FormState<IOperation>
}

const OperationFields: FC<TypeOperationFieldsProps> = ({
	register,
	formState: { errors }
}) => {
	return (
		<>
			<OperationField
				{...register('amount', {
					required: 'amount is required',
					minLength: {
						value: 1,
						message: 'Must be at least 1'
					},
					maxLength: {
						value: 6,
						message: 'Must be at less 6'
					}
				})}
				label='amount'
				type='number'
				placeholder='Insert amount'
				error={errors.amount}
			/>
		</>
	)
}

export default OperationFields
