import cn from 'clsx'
import { FC } from 'react'

import { useGetProfile } from '@/hooks/useGetProfile'

import { BackgroundColorBank } from '@/utils/background-color-bank'
import { convertMoneyToNormalize } from '@/utils/convert-money-to-normalize'
import { convertToHiddenNumber } from '@/utils/get-hidden-card'

import style from './Card.module.scss'
import { PropsCard } from './card.interface'
import CommonCardStyle from './common-style-card/CommonCardStyle'
import { NormalizeNumberCard } from '@/utils/normalize-number-card'

const Card: FC<PropsCard> = ({
	userCard,
	styleFigure,
	className,
	widthCard,
	slider,
	setSlider
}) => {
	const user = useGetProfile()?.name
	const { balance, expireDate, number, bankName } = userCard
	const background = BackgroundColorBank(bankName)
	const hiddenCard = convertToHiddenNumber(number)
	const numberCardNormalize = NormalizeNumberCard(number)
	
	return (
		<div
			className={cn(
				style.shareCard,
				className,
				styleFigure && 'pointer-events-none'
			)}
			style={{ width: `calc(${widthCard}%)` }}
		>
			<div className={cn(style.card)} style={{ background }}>
				{!styleFigure && (
					<>
						<CommonCardStyle />
						<div className={style.balance}>
							<h3>My Balance</h3>
							<p>${convertMoneyToNormalize(balance)}</p>
						</div>
						<div className={style.number}>
							<p
								onClick={() =>
									setSlider(prev => ({
										...prev,
										visibleNumberCard: !slider.visibleNumberCard
									}))
								}
							>
								{!slider.visibleNumberCard ? numberCardNormalize : hiddenCard}
							</p>
						</div>
						<div className={style.holder}>
							<h3>holder</h3>
							<p>{user || 'loading'}</p>
						</div>
						<div className={style.valid}>
							<h3>Valid Thru</h3>
							<p>{expireDate}</p>
						</div>
					</>
				)}
			</div>
		</div>
	)
}

export default Card
