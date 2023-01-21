export interface PropsCardActions {
	accountNumber: string
}

export type TypesActionsData = {
	className: string
	title: 'Top Up' | 'Withdraw'
	description: string
	arrowDirection: 'left' | 'right'
}[]
