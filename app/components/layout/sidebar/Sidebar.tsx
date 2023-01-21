import { FC } from 'react'

import Logo from './Logo'
import Menu from './menu/Menu'
import styles from './Sidebar.module.scss'

const Sidebar: FC = () => {
	return (
		<aside className={styles.sidebar}>
			<Logo /> 
			<Menu />
			<div className={styles.copy}>Made with ♥ by RED Project Team</div>
		</aside>
	)
}

export default Sidebar
