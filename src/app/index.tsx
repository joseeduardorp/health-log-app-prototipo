import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';

import Button from '@/components/shared/Button';

import * as S from './styles';

export default function App() {
	return (
		<S.Container>
			<StatusBar style="auto" />

			<S.ImageContainer>
				<S.Image
					source={require('../assets/splash-image.png')}
					resizeMode="contain"
				/>
			</S.ImageContainer>

			<S.ButtonContainer>
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
			</S.ButtonContainer>
		</S.Container>
	);
}
