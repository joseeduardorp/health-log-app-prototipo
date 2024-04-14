import { StatusBar } from 'expo-status-bar';
import { View, Image, SafeAreaView } from 'react-native';
import { Link } from 'expo-router';

import Button from '../components/shared/Button';

import { styles } from './styles';

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style="auto" />
			<View style={styles.imageContainer}>
				<Image
					style={styles.image}
					source={require('../assets/splash-image.png')}
				/>
			</View>

			<View style={styles.buttonContainer}>
				<Link
					href={{ pathname: 'access', params: { action: 'login' } }}
					asChild
				>
					<Button text="Entrar" />
				</Link>

				<Link
					href={{ pathname: 'access', params: { action: 'signUp' } }}
					asChild
				>
					<Button activeOpacity={0.65} text="Cadastrar" variant="outline" />
				</Link>
			</View>
		</SafeAreaView>
	);
}
