import Cookies from 'js-cookie'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import {
	FC,
	PropsWithChildren,
	createContext,
	useEffect,
	useState
} from 'react'

import { IContext, TypeUserState } from './auth-provider.interface'
import { checkAuth } from './check-auth'
import { getUserFromStorage } from '@/services/auth/auth.helper'
import { AuthService } from '@/services/auth/auth.service'

const DynamicCheckRole = dynamic(() => import('./CheckRole'), {
	ssr: false
})

export const AuthContext = createContext({} as IContext)

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
	const [user, setUser] = useState<TypeUserState>(getUserFromStorage() || null)
	const { pathname } = useRouter()

	useEffect(() => {
		const accessToken = Cookies.get('accessToken')
		if (accessToken) checkAuth(setUser)
	}, [])

	useEffect(() => {
		const accessToken = Cookies.get('accessToken')
		const refreshToken = Cookies.get('refreshToken')
		if (!refreshToken && user) {
			AuthService.logout()
			setUser(null)
		}
		if (!accessToken && user) {
			checkAuth(setUser)
		}
	}, [pathname])

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			<DynamicCheckRole>{children}</DynamicCheckRole>
		</AuthContext.Provider>
	)
}

export default AuthProvider
