import { FC } from 'react'

import Slider from '@/ui/slider/Slider'

import style from './Cards.module.scss'
import { useCardsQuery } from './cards-hooks/useCardsQuery'
import { useInitializeSliderCard } from './cards-hooks/useInitializeSliderCards'
import AddNewCard from './left-card/add-new-card/AddNewCard'
import LimitCard from './left-card/limit-card/LimitCard'
import Operations from './right-card/card-actions/CardActions'
import Description from './right-card/description/Description'

const Cards: FC = () => {
	const { newCard, userCards } = useCardsQuery()

	const { slider,setSlider } = useInitializeSliderCard(userCards.data)

	if (userCards.isLoading) return <span>Loading</span>

	return (
		<>
			<h1 className={style.head}>Cards</h1>
			{userCards.data?.length ? (
				<>
					<div className={style.cardList}>
						<div className={style.leftCardList}>
							{
								<Slider
									userCards={userCards.data}
									slider={slider}
									setSlider={setSlider}
								/>
							}
							<div className={style.bottomPlace}>
								<LimitCard />
								<div>
									<AddNewCard createCard={newCard} />
								</div>
							</div>
						</div>
						<div className={style.rightCardList}>
							{slider.currentCard && (
								<>
									<Operations accountNumber={slider.currentCard.accountNumber} />
									<Description
										userCard={slider.currentCard}
										visibleNumberCard={slider.visibleNumberCard}
									/>
								</>
							)}
						</div>
					</div>
				</>
			) : (
				<div>
					<h3>You have not a card</h3>
					<AddNewCard createCard={newCard} />
				</div>
			)}
		</>
	)
}

export default Cards
