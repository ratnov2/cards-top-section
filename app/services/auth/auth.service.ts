import { IAuthResponse } from '@/shared/types/auth.interface'

import { getAuthUrl } from '@/config/api.config'

import { request } from '@/api/request.api'

import { removeTokensStorage, saveToStorage } from './auth.helper'

export const AuthService = {
	async main(variant: 'reg' | 'login', email: string, password: string) {
		const response = await request<IAuthResponse>({
			url: getAuthUrl(`/${variant === 'reg' ? 'register' : 'login'}`),
			method: 'POST',
			data: { email, password }
		})
		
		if (response.accessToken) {
			saveToStorage(response)
		}

		return response
	},

	async logout() {
		await removeTokensStorage()
		localStorage.removeItem('user')
	}
}
