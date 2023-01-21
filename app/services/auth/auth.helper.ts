import Cookies from 'js-cookie'

import { IAuthResponse, ITokens } from '@/shared/types/auth.interface'

export const getAccessToken = () => {
	const accessToken = Cookies.get('accessToken')
	return accessToken || null
}

export const saveTokensStorage = (data: ITokens) => {
	Cookies.set('accessToken', data.accessToken)
	Cookies.set('refreshToken', data.refreshToken)
}

export const removeTokensStorage = () => {
	Cookies.remove('accessToken')
	Cookies.remove('refreshToken')
}

export const getUserFromStorage = () => {
	try {
		return JSON.parse(localStorage.getItem('user') || '{}')
	} catch (error) {
		return null
	}
}

export const saveToStorage = (data: IAuthResponse) => {
	saveTokensStorage(data)
	localStorage.setItem('user', JSON.stringify(data.user))
}
