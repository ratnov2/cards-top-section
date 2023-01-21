import cn from 'clsx'
import { FC } from 'react'
import { EffectCoverflow } from 'swiper'
import { Swiper } from 'swiper/react'
import { SwiperSlide } from 'swiper/react'

import { BackgroundColorBank } from '@/utils/background-color-bank'

import Arrow from '../arrow/Arrow'
import Card from '../card/Card'

import {
	initialStyleTransformIsActive,
	initialStyleTransformIsNext,
	initialStyleTransformIsPrev
} from './slider-initial.style'
import { PropsSlider } from './slider.interface'
import { useSlider } from './useSlider'

const Slider: FC<PropsSlider> = ({ userCards, slider, setSlider }) => {
	const { sliderRef, handleNext, handlePrev } = useSlider({ setSlider })

	return (
		<div className='relative'>
			<Swiper
				ref={sliderRef}
				centeredSlides={true}
				slidesPerView={slider.sliderPerView}
				initialSlide={slider.initialIndex}
				simulateTouch={false}
				effect={'coverflow'}
				coverflowEffect={{
					rotate: 0,
					depth: 200,
					modifier: 3,
					slideShadows: false
				}}
				modules={[EffectCoverflow]}
			>
				{userCards.map((card, key) => {
					return (
						<SwiperSlide key={card.number}>
							{({ isActive, isNext, isPrev }) => {
								return (
									<Card
										className={cn(
											isActive &&
												initialStyleTransformIsActive[slider.sliderPerView - 1],
											isPrev &&
												initialStyleTransformIsPrev[slider.sliderPerView - 1],
											isNext &&
												initialStyleTransformIsNext[slider.sliderPerView - 1],
											`${BackgroundColorBank(card.bankName)}`
										)}
										widthCard={slider.sliderPerView * 88.8}
										userCard={card}
										styleFigure={!isActive}
										slider={slider}
										setSlider={setSlider}
									/>
								)
							}}
						</SwiperSlide>
					)
				})}
			</Swiper>

			{!sliderRef.current?.swiper.isEnd && (
				<Arrow className='-right-4 top-32 absolute z-50' onClick={handleNext} />
			)}
			{!sliderRef.current?.swiper.isBeginning && (
				<Arrow
					className='rotate-180 -left-4 top-32 absolute z-50'
					onClick={handlePrev}
				/>
			)}
		</div>
	)
}

export default Slider
