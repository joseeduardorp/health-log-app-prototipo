import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		padding: 20,
		backgroundColor: '#fff',
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
	},
	imageContainer: {
		marginTop: 150,
		height: 300,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	image: {
		width: '100%',
		resizeMode: 'contain',
	},
	buttonContainer: {
		marginTop: 100,
		height: 90,
		gap: 10,
	},
});
