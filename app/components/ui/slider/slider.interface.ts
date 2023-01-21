import { Dispatch, SetStateAction } from 'react'

import { IUserCard } from '@/shared/types/bank-accounts.interface'

import { ISliderInit } from '@/screens/cards/cards-hooks/slider.interface'

export interface PropsSlider {
	userCards: IUserCard[]
	slider: ISliderInit
	setSlider: Dispatch<SetStateAction<ISliderInit>>
}
export interface PropsUseSlider {
	setSlider: Dispatch<SetStateAction<ISliderInit>>
}

export type TypeStyleCard = {
	background: string
}
export type TypeUserCardAndStyle = IUserCard & TypeStyleCard
