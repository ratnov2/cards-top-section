import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const Logo: FC = () => {
	return (
		<Link href='/'>
			<Image
				src='/images/logo-with-text.svg'
				alt='RED Bank'
				width={228}
				height={48}
			/>
		</Link>
	)
}

export default Logo
