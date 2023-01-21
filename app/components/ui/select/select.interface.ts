import { ClassNamesConfig, GroupBase, Props } from 'react-select'

import { ISize, ITailwindColors, IVariant } from '@/ui/ui.interface'

export interface ISelect<
	Option,
	IsMulti extends boolean,
	Group extends GroupBase<Option> = GroupBase<Option>
> extends Props<Option, IsMulti, Group> {
	// here you can extend react-select interface with other custom props
	color?: ITailwindColors
	size?: ISize
	variant?: IVariant
}

export interface ISelectOption {
	value: string
	label: string
}

export type ISelectClassNames = (
	variant: IVariant,
	color: ITailwindColors,
	size: ISize
) =>
	| ClassNamesConfig<ISelectOption, boolean, GroupBase<ISelectOption>>
	| undefined
