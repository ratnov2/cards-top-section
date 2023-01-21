import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import styles from './UserMenu.module.scss'
import UserLinks from './user-links/UserLinks'

const UserMenu: FC = () => {
	return (
		<nav>
			<UserLinks />
			<Link href='/profile' className={styles.profile}>
				<Image
					src='/images/avatar-empty.png'
					width={56}
					height={56}
					alt='profile'
				/>
				<span>Rara Avis</span>
			</Link>
		</nav>
	)
}

export default UserMenu
