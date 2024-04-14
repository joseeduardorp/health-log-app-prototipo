import { Text, View, SafeAreaView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import Header from '@/components/auth/Header';
import Button from '@/components/shared/Button';

import { styles } from './styles';

import { Actions } from './types';

export default function Login() {
	const params = useLocalSearchParams<{ action: Actions }>();

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style="auto" />
			<Header />

			<Text style={styles.title}>
				{params.action === 'login'
					? 'Qual perfil deseja acessar?'
					: 'Que tipo de perfil deseja criar?'}
			</Text>

			<View style={styles.buttonContainer}>
				<Button text="Paciente" />

				<Button activeOpacity={0.65} text="Cuidador" variant="outline" />
			</View>
		</SafeAreaView>
	);
}
