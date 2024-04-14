import { StyleSheet } from 'react-native';

export const fill = StyleSheet.create({
	button: {
		width: 220,
		height: 40,
		backgroundColor: '#665CF5',
		borderColor: '#665CF5',
		borderWidth: 2,
		borderRadius: 5,
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonText: {
		color: '#fff',
		fontSize: 16,
		fontWeight: '700',
	},
});

export const outline = StyleSheet.create({
	button: {
		width: 220,
		height: 40,
		backgroundColor: '#00000000',
		borderColor: '#665CF5',
		borderWidth: 2,
		borderRadius: 5,
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonText: {
		color: '#665CF5',
		fontSize: 16,
		fontWeight: '700',
	},
});
