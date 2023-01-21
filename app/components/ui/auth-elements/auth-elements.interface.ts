import { ButtonHTMLAttributes, InputHTMLAttributes } from 'react'
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'

export interface IAuthButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	baseStyle: 'primary' | 'secondary'
}

export interface IAuthFieldProps {
	label: string
	error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>
}

export type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> &
	IAuthFieldProps

export interface IAuthField extends TypeInputPropsField {}
	