import { FC } from 'react'

import MenuItem from './MenuItem'
import { menu } from './menu.data'

const Menu: FC = () => {
	return (
		<ul>
			{menu.map(menuItem => (
				<MenuItem item={menuItem} key={menuItem.name} />
			))}
		</ul>
	)
}

export default Menu
