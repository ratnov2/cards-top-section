import { useMemo } from 'react'
import { UseFormReset } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'

import { IAuthFormData } from '@/shared/types/auth.interface'

import { useAuth } from '@/hooks/useAuth'

import { AuthService } from '@/services/auth/auth.service'

export const useAuthMutations = (reset: UseFormReset<IAuthFormData>) => {
	const { setUser } = useAuth()

	const { isLoading: isLoginLoading, mutate: loginSync } = useMutation(
		['login'],
		({ email, password }: IAuthFormData) =>
			AuthService.main('login', email, password),
		{
			onSuccess(data) {
				reset()
				setUser(data.user)
			}
		}
	)

	const { mutate: registerSync, isLoading: isRegisterLoading } = useMutation(
		['register'],
		({ email, password }: IAuthFormData) =>
			AuthService.main('reg', email, password),
		{
			onSuccess(data) {
				reset()
				setUser(data.user)
			}
		}
	)

	return useMemo(
		() => ({
			loginSync,
			registerSync,
			isLoading: isLoginLoading || isRegisterLoading
		}),
		[isLoginLoading, isRegisterLoading]
	)
}
