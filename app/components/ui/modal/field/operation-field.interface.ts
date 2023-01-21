import { InputHTMLAttributes } from 'react'
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'

export interface IOperation {
	amount: number
}
export interface IOperationFieldProps {
	label: string
	error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>
}

export type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> &
	IOperationFieldProps

export interface IOperationField extends TypeInputPropsField {}
