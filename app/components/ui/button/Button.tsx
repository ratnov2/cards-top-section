import cn from 'clsx'
import { FC } from 'react'

import { IButton } from '@/ui/button/button.interface'
import { fontSizes } from '@/ui/ui.data'

import styles from './Button.module.scss'

const Button: FC<IButton> = ({
	variant = 'primary',
	size = 'sm',
	color = 'purple',
	className,
	children,
	...rest
}) => {
	return (
		<button
			className={cn(
				'rounded-full border py-[0.3em] px-[1em] transition-all',
				fontSizes[size],
				styles[variant],
				styles[color],
				className
			)}
			{...rest}
		>
			{children}
		</button>
	)
}

export default Button
