import { StatusBar } from 'expo-status-bar';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	SafeAreaView,
} from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { Link } from 'expo-router';

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style="auto" />

			<Link replace href="/" style={styles.backButton}>
				<Feather name="arrow-left" size={40} color="#999" />
			</Link>

			<Text style={styles.title}>Que tipo de conta deseja criar?</Text>

			<View style={styles.buttonContainer}>
				<TouchableOpacity
					activeOpacity={0.85}
					style={{ ...styles.button, backgroundColor: '#665CF5' }}
				>
					<Text style={{ ...styles.buttonText, color: '#fff' }}>Paciente</Text>
				</TouchableOpacity>

				<TouchableOpacity activeOpacity={0.65} style={styles.button}>
					<Text style={styles.buttonText}>Cuidador</Text>
				</TouchableOpacity>
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
	title: {
		color: '#665CF5',
		fontSize: 46,
		fontWeight: '800',
	},
	buttonContainer: {
		marginTop: 200,
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
	backButton: {
		position: 'absolute',
		top: 50,
		left: 20,
	},
});
