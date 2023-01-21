import { FC } from 'react'

import CardActionBlock from '@/ui/card-action-block/CardActionBlock'

import style from './CardActions.module.scss'
import { cardActionsData } from './card-actions.data'
import { PropsCardActions } from './card-actions.interface'

const CardActions: FC<PropsCardActions> = ({ accountNumber }) => {
	return (
		<div className={style.cardActions}>
			{cardActionsData.map(el => {
				return (
					<CardActionBlock
						className={el.className}
						arrowDirection={el.arrowDirection}
						description={el.description}
						title={el.title}
						key={el.title}
						accountNumber={accountNumber}
						operation={el.title}
					/>
				)
			})}
		</div>
	)
}

export default CardActions
