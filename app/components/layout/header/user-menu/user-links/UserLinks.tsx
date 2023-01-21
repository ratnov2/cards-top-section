import { FC } from 'react'
import { AiOutlineSetting } from 'react-icons/ai'

import styles from '../UserMenu.module.scss'

import UserLink from './UserLink'

const UserLinks: FC = () => {
	return (
		<div className={styles.links}>
			<UserLink link='/settings'>
				<AiOutlineSetting />
			</UserLink>
		</div>
	)
}

export default UserLinks
