import { useEffect, useState } from 'react'

import { IUserCard } from '@/shared/types/bank-accounts.interface'

import { SliderInitialIdx } from '@/utils/slider/slider-initial-index'
import { SliderPerView } from '@/utils/slider/slider-per-view'

import { ISliderInit } from './slider.interface'

export const useInitializeSliderCard = (cards?: IUserCard[]) => {
	const [slider, setSlider] = useState<ISliderInit>({
		sliderPerView: 1,
		initialIndex: 1,
		index: 0,
		currentCard: undefined,
		visibleNumberCard: false
	})

	useEffect(() => {
		if (cards) {
			setSlider(prev => ({ ...prev, currentCard: cards[slider.index] }))
		}
	}, [slider.index])

	useEffect(() => {
		if (cards) {
			const sliderPerViewTime = SliderPerView(cards.length)
			const initialIndexTime = SliderInitialIdx(sliderPerViewTime)
			
			setSlider(prev => ({
				...prev,
				sliderPerView: sliderPerViewTime,
				initialIndex: initialIndexTime,
				currentCard: cards[slider.index],
				index: initialIndexTime
			}))
		}
	}, [cards])

	return { slider, setSlider }
}
