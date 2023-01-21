import { useMutation, useQueryClient } from '@tanstack/react-query'
import { FC, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import { IOperations } from '@/shared/types/bank-accounts.interface'

import Button from '../button/Button'

import { PropsModal } from './Modal.interface'
import style from './Modal.module.scss'
import OperationFields from './field/OperationFields'
import { useModalForm } from './useModalForm'
import { BankAccountService } from '@/services/card/bank-account.service'

const Modal: FC<PropsModal> = ({
	show,
	onClose,
	children,
	title,
	accountNumber,
	operation
}) => {
	const queryClient = useQueryClient()

	const operationQuery = useMutation(
		['make-operation'],
		(data: IOperations) => BankAccountService.makeOperation(operation, data),
		{
			onSuccess() {
				queryClient.invalidateQueries(['get-user-cards'])
				onClose()
				reset({})
			}
		}
	)
	const {
		handleSubmit,
		onSubmit,
		registerInput,
		formState,
		handleCloseClick,
		reset
	} = useModalForm({ onClose, accountNumber, operationQuery })

	const [isBrowser, setIsBrowser] = useState(false)

	useEffect(() => {
		setIsBrowser(true)
	}, [])

	const modalContent = show ? (
		<div className={style.modal}>
			<div className={style.modalContent} onClick={e => e.stopPropagation()}>
				<div className={style.modalHeader}>
					<h4 className={style.modalTitle}>{title}</h4>
				</div>
				<div className={style.modalBody}>{children}</div>

				<div className={style.modalFooter}>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className='flex flex-col w-full'
					>
						<OperationFields formState={formState} register={registerInput} />
						<Button
							color='red'
							className={style.close}
							disabled={operationQuery?.isLoading}
							onClick={handleCloseClick}
						>
							Close
						</Button>
						<Button className={style.make} disabled={operationQuery?.isLoading}>
							make a {title}
						</Button>
					</form>
				</div>
			</div>
		</div>
	) : null

	if (isBrowser) {
		return createPortal(
			modalContent,
			//@ts-ignore
			document.getElementById('__next')
		)
	} else {
		return null
	}
}

export default Modal
