import {
	AiOutlineCopy,
	AiOutlineCreditCard,
	AiOutlineHome,
	AiOutlineMoneyCollect,
	AiOutlineTransaction
} from 'react-icons/ai'
import { AiOutlineSetting } from 'react-icons/ai'

import { IMenuItem } from './menu.interface'

export const menu: IMenuItem[] = [
	{
		name: 'Dashboard',
		icon: AiOutlineHome,
		link: '/'
	},
	{
		name: 'Balance',
		icon: AiOutlineMoneyCollect,
		link: '/balance'
	},
	{
		name: 'Invoices',
		icon: AiOutlineCopy,
		link: '/invoices'
	},
	{
		name: 'Cards',
		icon: AiOutlineCreditCard,
		link: '/cards'
	},
	{
		name: 'Transactions',
		icon: AiOutlineTransaction,
		link: '/transactions'
	},
	{
		name: 'Settings',
		icon: AiOutlineSetting,
		link: '/settings'
	}
]
