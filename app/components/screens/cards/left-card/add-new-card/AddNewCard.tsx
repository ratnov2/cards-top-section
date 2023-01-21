import Link from 'next/link'
import { FC } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { CgAdd } from 'react-icons/cg'
import cn from 'clsx'
import style from './AddNewCard.module.scss'
import { PropsAddNewCard } from './add-new-card.interface'

const AddNewCard: FC<PropsAddNewCard> = ({ createCard }) => {
	const {isLoading,mutate} = createCard
	return (
		<>
			<button className={style.newCard} onClick={()=>mutate()} >
				{isLoading ? <AiOutlineLoading3Quarters /> : <CgAdd />}
				<span className={cn(isLoading && 'text-gray')}>Add new card</span>
			</button>
		</>
	)
}

export default AddNewCard
