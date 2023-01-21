import cn from 'clsx'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Meta from '@/layout/meta/Meta'
import Logo from '@/layout/sidebar/Logo'

import AuthButton from '@/ui/auth-elements/AuthButton'

import styles from './Auth.module.scss'
import { useAuthMutations } from './useAuthMutations'
import { useAuthRedirect } from './useAuthRedirect'
import AuthFields from '@/screens/auth/AuthFields'
import { IAuthInput } from '@/screens/auth/auth.interface'

const Auth: FC = () => {
	useAuthRedirect()

	const [isReg, setIsReg] = useState(false)

	const {
		register: registerInput,
		handleSubmit,
		formState,
		reset
	} = useForm<IAuthInput>({
		mode: 'onChange'
	})

	const { isLoading, registerSync, loginSync } = useAuthMutations(reset)

	const onSubmit: SubmitHandler<IAuthInput> = data => {
		isReg ? registerSync(data) : loginSync(data)
	}

	return (
		<Meta title='Auth'>
			<section
				className={cn(
					styles.wrapper,
					'bg-light-gray min-h-screen flex flex-col items-center justify-center'
				)}
			>
				<div className='bg-white text-black shadow-sm rounded-2xl p-16 w-full max-w-xl flex flex-col items-center'>
					<div className='mb-10 pointer-events-none'>
						<Logo />
					</div>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className='flex flex-col w-full'
					>
						{/* fields */}
						<AuthFields
							formState={formState}
							register={registerInput}
							isPasswordRequired={true}
						/>
						{/* buttons */}
						<div className='self-center mt-6 gap-y-6'>
							<AuthButton
								type='submit'
								onClick={() => setIsReg(false)}
								disabled={isLoading}
								baseStyle='primary'
							>
								Login
							</AuthButton>
							<AuthButton
								type='submit'
								onClick={() => setIsReg(true)}
								disabled={isLoading}
								baseStyle='secondary'
							>
								Register
							</AuthButton>
						</div>
					</form>
				</div>
			</section>
		</Meta>
	)
}

export default Auth
