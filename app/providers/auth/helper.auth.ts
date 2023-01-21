import Cookies from 'js-cookie'

import { getAuthUrl } from '@/config/api.config'

import { getContentType } from '@/api/api.helpers'
import { axiosClassic } from '@/api/interceptors'

import { saveToStorage } from '@/services/auth/auth.helper'

export const getNewTokens = async () => {
	const refreshToken = Cookies.get('refreshToken')
	const response = await axiosClassic.post(
		getAuthUrl('/login/access-token'),
		{ refreshToken },
		{ headers: getContentType() }
	)

	if (response.data.accessToken) saveToStorage(response.data)

	return response
}
