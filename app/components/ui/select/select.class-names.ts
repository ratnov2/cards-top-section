import cn from 'clsx'

import { ISelectClassNames } from '@/ui/select/select.interface'

import styles from './Select.module.scss'

export const selectClassNames: ISelectClassNames = (variant, color, size) => ({
	control: state =>
		cn(
			state.isFocused ? styles.control__focused : styles.control,
			styles[color],
			styles[size],
			styles[variant]
		),
	dropdownIndicator: state =>
		cn(
			state.isFocused
				? styles.dropdownIndicator__focused
				: styles.dropdownIndicator,
			styles[color],
			styles[variant]
		),
	valueContainer: () => cn(styles.valueContainer, styles[variant]),
	placeholder: state =>
		cn(
			(state.isFocused || !state.isFocused) && styles.placeholder,
			styles[variant]
		),
	singleValue: () => cn(styles.singleValue, styles[variant]),
	input: () => cn(styles.Input, styles[variant]),
	indicatorSeparator: () => cn(styles.indicatorSeparator, styles[variant]),
	indicatorsContainer: () => cn(styles.indicatorsContainer, styles[variant]),

	// menuIsOpen
	menu: () => cn(styles.menu, styles[color], styles[size], styles[variant]),
	menuList: () => cn(styles.menuList, styles[variant]),
	option: state =>
		cn(
			state.isSelected ? styles.Option__selected : styles.Option,
			styles[variant]
		)
})
