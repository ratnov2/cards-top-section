import { useMutation, useQuery } from '@tanstack/react-query'

import { BankAccountService } from '@/services/card/bank-account.service'

export const useCardsQuery = () => {
	const userCards = useQuery(
		['get-user-cards'],
		() => BankAccountService.getAllUserCards(),
		{
			select: ({ data }) => data
		}
	)

	const newCard = useMutation(
		['create-card'],
		() => BankAccountService.createCard(),
		{
			onSuccess: () => userCards.refetch()
		}
	)

	return { userCards, newCard }
}
