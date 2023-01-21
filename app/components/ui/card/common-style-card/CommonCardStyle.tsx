import cn from 'clsx'
import { FC } from 'react'

import Circle from './Circle'
import style from './CommonCardStyle.module.scss'
import Rectangle from './Rectangle'

const CommonCardStyle: FC = () => {
	return (
		<>
			<div className={cn(style.rectangleGroup)}>
				<Rectangle />
				<Rectangle />
			</div>
			<div className={style.circleGroup}>
				<Circle />
				<Circle />
			</div>
		</>
	)
}

export default CommonCardStyle
