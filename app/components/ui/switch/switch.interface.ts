import { InputHTMLAttributes } from 'react'

import { ISize, ITailwindColors, IVariant } from '@/ui/ui.interface'

export interface ISwitchProps {
	variant?: IVariant
	color?: ITailwindColors
	dimension?: ISize
	withText?: boolean
}

type TypeSwitchProps = InputHTMLAttributes<HTMLInputElement> & ISwitchProps

export interface ISwitch extends TypeSwitchProps {}
