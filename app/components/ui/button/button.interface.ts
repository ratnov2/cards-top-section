import { ButtonHTMLAttributes } from 'react'

import { ISize, ITailwindColors, IVariant } from '@/ui/ui.interface'

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: IVariant
	size?: ISize
	color?: ITailwindColors
}
