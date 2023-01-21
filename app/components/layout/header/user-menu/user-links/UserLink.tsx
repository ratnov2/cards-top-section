import Link from 'next/link'
import { FC, PropsWithChildren } from 'react'

import styles from '../UserMenu.module.scss'

interface IUserLink {
	link: string
}

const UserLink: FC<PropsWithChildren<IUserLink>> = ({ children, link }) => {
	return (
		<Link className={styles.icon} href={link}>
			{children}
		</Link>
	)
}

export default UserLink
