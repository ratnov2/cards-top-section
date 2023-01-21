import { UseMutationResult } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { ReactNode } from 'react'

import { IOperations } from '@/shared/types/bank-accounts.interface'

export interface PropsModal {
	show: boolean
	onClose: () => void
	accountNumber: string
	title?: string
	children: ReactNode
	operation: 'Top Up' | 'Withdraw'
}

export interface PropsUseModalForm {
	accountNumber: string
	operationQuery?: UseMutationResult<
		AxiosResponse<any, any> | undefined,
		unknown,
		IOperations,
		unknown
	>
	onClose: () => void
}
