import { fontSizes, tailwindColors } from '@/ui/ui.data'

export type IVariant = 'primary' | 'secondary' | 'tertiary'
export type ISize = keyof typeof fontSizes
export type ITailwindColors = keyof typeof tailwindColors
