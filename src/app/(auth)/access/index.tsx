import { useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import Header from '@/components/auth/Header';
import Button from '@/components/shared/Button';

import * as S from './styles';

import { Actions } from './types';

export default function Login() {
	const params = useLocalSearchParams<{ action: Actions }>();

	return (
		<S.Container>
			<StatusBar style="auto" />
			<Header />

			<S.Title>
				{params.action === 'login'
					? 'Qual perfil deseja acessar?'
					: 'Que tipo de perfil deseja criar?'}
			</S.Title>

			<S.ButtonContainer>
				<Button text="Paciente" />

				<Button activeOpacity={0.65} text="Cuidador" variant="outline" />
			</S.ButtonContainer>
		</S.Container>
	);
}
