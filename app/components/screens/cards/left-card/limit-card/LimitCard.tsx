import { FC } from 'react'

import { convertMoneyToNormalize } from '@/utils/convert-money-to-normalize'

const LimitCard: FC = () => {
	//Fake Data
	const { all, now } = {
		all: 40000,
		now: 25000
	}

	return (
		<div>
			<h3>Limit</h3>
			<div className='w-52 bg-light-gray h-4 rounded-full my-3'>
				<div
					className={`bg-purple h-4 rounded-full`}
					style={{
						width: `calc(${(now / all) * 100}%)`
					}}
				></div>
			</div>
			<div>
				<span>${convertMoneyToNormalize(now)}</span>
				<span className='text-purple'>
					{' '}
					/ from ${convertMoneyToNormalize(all)}
				</span>
			</div>
		</div>
	)
}

export default LimitCard
