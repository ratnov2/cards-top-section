import { Dispatch, SetStateAction } from 'react'

import { errorCatch } from '@/api/api.helpers'

import { TypeUserState } from './auth-provider.interface'
import { getNewTokens } from './helper.auth'
import { AuthService } from '@/services/auth/auth.service'

export const checkAuth = async (
	setUser: Dispatch<SetStateAction<TypeUserState>>
) => {
	try {
		const response = await getNewTokens()
		return response.data
	} catch (error) {
		if (errorCatch(error) === 'jwt expired') {
			AuthService.logout()
			setUser(null)
		}

		return null
	}
}
