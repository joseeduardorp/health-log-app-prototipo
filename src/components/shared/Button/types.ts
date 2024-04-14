export type VariantOptions = 'fill' | 'outline';

export interface IProps {
	onPress?: () => void;
	activeOpacity?: number;
	variant?: VariantOptions;
	text: string;
	customStyles?: Object;
}
