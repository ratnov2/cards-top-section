import cn from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import styles from '../Sidebar.module.scss'

import { IMenuItem } from './menu.interface'

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const { pathname } = useRouter()

	return (
		<li>
			<Link
				href={item.link}
				className={cn({
					[styles.active]: pathname === item.link
				})}
			>
				<span>
					<item.icon size={30} />
				</span>
				<span>{item.name}</span>
			</Link>
		</li>
	)
}

export default MenuItem
