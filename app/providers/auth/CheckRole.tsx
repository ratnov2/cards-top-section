import { useRouter } from 'next/router'
import { FC, PropsWithChildren } from 'react'

import { useAuth } from '@/hooks/useAuth'

import Auth from '@/screens/auth/Auth'

const CheckRole: FC<PropsWithChildren> = ({ children }) => {
	const { user } = useAuth()

	const { pathname, replace } = useRouter()

	const Children = () => <>{children}</>

	if (user) return <Children />
	else {
		pathname !== '/auth' && replace('/auth')
		return <Auth />
	}
}

export default CheckRole
