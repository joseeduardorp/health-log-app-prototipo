import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export type VariantOptions = 'fill' | 'outline';

export interface IProps {
	onPress?: () => void;
	activeOpacity?: number;
	variant?: VariantOptions;
	text: string;
	customStyles?: ICustomStyles;
}

export interface ICustomStyles {
	buttonStyles?: StyleProp<ViewStyle>;
	textStyles?: StyleProp<TextStyle>;
}
