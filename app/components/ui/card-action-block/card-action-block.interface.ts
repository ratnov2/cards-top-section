import { AxiosResponse } from 'axios'
import { UseMutationResult } from 'react-query'

import { IOperations } from '@/shared/types/bank-accounts.interface'
import { TypeMakeOperation } from '@/services/card/bank-account.type'

export interface PropsCardActionsBlock {
	className?: string
	arrowDirection?: 'left' | 'right',
	accountNumber:string
	title?: string
	description?: string
	operation: TypeMakeOperation
}
