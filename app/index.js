import { StatusBar } from 'expo-status-bar';
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	SafeAreaView,
} from 'react-native';
import { Link } from 'expo-router';

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style="auto" />
			<Image
				style={styles.image}
				source={require('../assets/splash-image.png')}
			/>

			<View style={styles.buttonContainer}>
				<Link href="/accountType" asChild>
					<TouchableOpacity
						activeOpacity={0.85}
						style={{ ...styles.button, backgroundColor: '#665CF5' }}
					>
						<Text style={{ ...styles.buttonText, color: '#fff' }}>Entrar</Text>
					</TouchableOpacity>
				</Link>

				<Link href="/accountType" asChild>
					<TouchableOpacity activeOpacity={0.65} style={styles.button}>
						<Text style={styles.buttonText}>Cadastrar</Text>
					</TouchableOpacity>
				</Link>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	image: {
		height: 300,
		resizeMode: 'contain',
	},
	buttonContainer: {
		marginTop: 100,
		height: 90,
		gap: 10,
	},
	button: {
		width: 220,
		height: 40,
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
