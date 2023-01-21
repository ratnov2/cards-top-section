import { ISliderInit } from '@/screens/cards/cards-hooks/slider.interface'
import { IUserCard } from '@/shared/types/bank-accounts.interface'
import { Dispatch, SetStateAction } from 'react'


export interface PropsCard {
	userCard:IUserCard
	widthCard: number
	styleFigure?: boolean
	className?: string
	slider:ISliderInit
	setSlider: Dispatch<SetStateAction<ISliderInit>>
}
