import cn from 'clsx'
import { FC } from 'react'
import { BsArrowRightShort } from 'react-icons/bs'

import { PropsArrow } from './arrow-inteface'
import style from './Arrow.module.scss'

const Arrow: FC<PropsArrow> = ({ className, ...rest }) => {
	return (
		<span className={cn(style.arrow, className)} {...rest}>
			<BsArrowRightShort />
		</span>
	)
}

export default Arrow
