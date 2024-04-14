import { VariantOptions } from './types';

export const variants: Record<VariantOptions, Record<string, string>> = {
	fill: {
		backgroundColor: '#665cf5',
		borderColor: '#665cf5',
		color: '#fff',
	},
	outline: {
		backgroundColor: '#00000000',
		borderColor: '#665cf5',
		color: '#665cf5',
	},
};
