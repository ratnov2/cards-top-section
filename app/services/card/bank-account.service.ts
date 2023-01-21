import { IOperations, IUserCard } from '@/shared/types/bank-accounts.interface'

import { getAccountsUrl } from '@/config/api.config'

import { instance } from '@/api/interceptors'
import { TypeMakeOperation } from './bank-account.type'

export const BankAccountService = {
	async getAllBankAccounts() {
		return instance.get(getAccountsUrl(''))
	},
	async getAllUserCards() {
		return instance.get<IUserCard[]>(getAccountsUrl('/get-user-cards'))
	},
	async createBankAccount() {
		return instance.post(getAccountsUrl(''))
	},
	async createCard() {
		return instance.post(getAccountsUrl('/create-card'))
	},
	async makeOperation(type: TypeMakeOperation, data: IOperations) {
		if (type === 'Top Up')
			return instance.patch(getAccountsUrl('/balance/top-up'), data)
		if (type === 'Withdraw')
			return instance.patch(getAccountsUrl('/balance/withdrawal'), data)
	}
}

