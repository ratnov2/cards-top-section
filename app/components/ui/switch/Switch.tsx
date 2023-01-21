import cn from 'clsx'
import { forwardRef } from 'react'

import { ISwitch } from '@/ui/switch/switch.interface'
import { fontSizes, switchText } from '@/ui/ui.data'

import { getKeys } from '@/utils/object'

import styles from './Switch.module.scss'

const Switch = forwardRef<HTMLInputElement, ISwitch>(
	(
		{
			color = 'purple',
			dimension = 'sm',
			withText = true,
			style,
			className,
			type,
			...rest
		},
		ref
	) => {
		return (
			<label
				style={style}
				className={cn(styles.checkbox, styles[dimension])}
			>
				<input ref={ref} {...rest} type='checkbox' />
				<div
					className={cn(
						styles.fake_input,
						styles[color],
						styles[dimension],
						className
					)}
				/>
				{withText &&
					getKeys(switchText).map(text => (
						<div
							className={cn(
								'absolute top-1/2 text-white -translate-y-1/2 transition-all leading-none pointer-events-none',
								fontSizes[dimension],
								styles[text]
							)}
							key={text}
						>
							{switchText[text]}
						</div>
					))}
			</label>
		)
	}
)

Switch.displayName = 'Switch'

export default Switch
