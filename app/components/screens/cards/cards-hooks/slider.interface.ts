import { IUserCard } from '@/shared/types/bank-accounts.interface'

export interface ISliderInit {
	sliderPerView: number
	initialIndex: number
	index: number
	currentCard?: IUserCard
	visibleNumberCard: boolean
}
