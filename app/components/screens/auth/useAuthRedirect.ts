import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { useAuth } from '@/hooks/useAuth'

export const useAuthRedirect = () => {
	const { user } = useAuth()

	const { push } = useRouter()

	useEffect(() => {
		if (user) push('/')
	}, [user])
}
