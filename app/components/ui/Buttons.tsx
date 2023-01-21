/**
 * This is only for test purposes to show ui buttons
 */
import { FC, useState } from 'react'
import { ActionMeta, MultiValue, SingleValue } from 'react-select'

import Layout from '@/layout/Layout'

import Button from '@/ui/button/Button'
import Select from '@/ui/select/Select'
import { ISelectOption } from '@/ui/select/select.interface'
import Switch from '@/ui/switch/Switch'
import { fontSizes, tailwindColors } from '@/ui/ui.data'
import { ITailwindColors } from '@/ui/ui.interface'

import { getKeys } from '@/utils/object'

const selectOptions = getKeys(tailwindColors).map(key => ({
	label: key,
	value: tailwindColors[key]
}))

const Buttons: FC = () => {
	const [background, setBackground] = useState<ITailwindColors>('purple')

	const changeColor = (
		newValue: SingleValue<ISelectOption> | MultiValue<ISelectOption>,
		actionMeta: ActionMeta<any>
	) => {
		const option = newValue as SingleValue<ISelectOption>
		option && setBackground(option.label as ITailwindColors)
	}
	return (
		<Layout title='buttons'>
			<div className='flex flex-col items-center justify-center min-h-screen'>
				<div className='w-3/4 flex flex-col'>
					<h3
						className='text-2xl p-10 pl-20 text-white font-bold'
						style={{
							backgroundColor: tailwindColors[background]
						}}
					>
						Buttons
					</h3>
					{/* buttons */}
					<div className='px-14 py-20 border border-gray bg-white flex flex-col flex-wrap gap-3'>
						{/* default Select */}
						<div>
							<span className='font-bold'>Default Select</span>{' '}
							without props ( default values are -&gt;{' '}
							<span className='font-bold'>
								variant? = 'primary', color? = 'purple', size? =
								'sm' ){' '}
							</span>
						</div>
						<div>
							<Select
								options={selectOptions}
								onChange={changeColor}
							/>
						</div>
						{/* default Button */}
						<div>
							<span className='font-bold'>Default Button</span>{' '}
							without props ( default values are -&gt;{' '}
							<span className='font-bold'>
								variant? = 'primary', color? = 'purple', size? =
								'sm' ){' '}
							</span>
						</div>
						<div>
							<Button>Primary purple sm</Button>
						</div>
						{/* default Switch */}
						<div>
							<span className='font-bold'>Default Switch</span>{' '}
							without props ( default values are -&gt;{' '}
							<span className='font-bold'>
								withText? = true , color? = 'purple', size? =
								'sm'){' '}
							</span>
						</div>
						<div>
							<Switch />
						</div>
						<div className='font-bold'>variant?</div>
						<div className='grid grid-cols-5 gap-3'>
							<div>
								<Button>Primary</Button>
							</div>
							<div>
								<Button variant='secondary'>Secondary</Button>
							</div>
							<div>
								<Button variant='tertiary'>Tertiary</Button>
							</div>
						</div>
						<div className='grid grid-cols-5 gap-3'>
							<div>
								<Select
									options={selectOptions}
									variant='primary'
								/>
							</div>
							<div>
								<Select
									options={selectOptions}
									variant='secondary'
								/>
							</div>
							<div>
								<Button variant='tertiary'>Tertiary</Button>
							</div>
						</div>

						<div className='font-bold'>color?</div>
						{getKeys(tailwindColors).map(color => (
							<div className='grid grid-cols-5 gap-3' key={color}>
								<div>
									<Button variant='primary' color={color}>
										Primary {color}
									</Button>
								</div>
								<div>
									<Button variant='secondary' color={color}>
										Secondary {color}
									</Button>
								</div>
								<div>
									<Button variant='tertiary' color={color}>
										Tertiary {color}
									</Button>
								</div>
								<div className='flex items-center'>
									<Switch key={color} color={color} />
								</div>
								<div className='w-1/2'>
									<Select
										options={selectOptions}
										onChange={changeColor}
										color={color}
									/>
								</div>
							</div>
						))}

						<div className='font-bold'>size?</div>
						{getKeys(fontSizes).map(size => (
							<div className='grid grid-cols-5 gap-3' key={size}>
								<div>
									<Button variant='primary' size={size}>
										Primary {size}
									</Button>
								</div>
								<div>
									<Button variant='secondary' size={size}>
										Secondary {size}
									</Button>
								</div>
								<div>
									<Button variant='tertiary' size={size}>
										Tertiary {size}
									</Button>
								</div>
								<div className='flex items-center'>
									<Switch key={size} dimension={size} />
								</div>
								<div className=''>
									<Select
										options={selectOptions}
										onChange={changeColor}
										size={size}
									/>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Buttons
