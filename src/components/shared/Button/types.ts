export interface IProps {
	onPress?: () => void;
	activeOpacity?: number;
	variant?: 'fill' | 'outline';
	text: string;
	customStyles?: Object;
}
