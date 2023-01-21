export const getKeys = Object.keys as <T extends object>(
	obj: T
) => Array<keyof T>

// Uncomment the example below to look how it works

// export const fontSizes = {
// 	xs: 'text-xs',
// 	sm: 'text-sm',
// 	base: 'text-base',
// 	lg: 'text-lg',
// 	xl: 'text-xl'
// }

// const arrayToMapWithObjetKeys = getKeys(fontSizes)

// arrayToMapWithObjetKeys.map(key => console.log(key))
