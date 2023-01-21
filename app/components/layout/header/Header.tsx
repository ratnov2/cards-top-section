import { FC } from 'react'

import styles from './Header.module.scss'
import UserMenu from './user-menu/UserMenu'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<UserMenu />
		</header>
	)
}

export default Header
