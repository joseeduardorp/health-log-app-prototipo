import { useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import Header from '@/components/auth/Header';
import Title from '@/components/auth/Title';
import Button from '@/components/shared/Button';

import * as S from './styles';

import { Actions } from './types';

export default function Access() {
	const { action } = useLocalSearchParams<{ action: Actions }>();
	const title =
		action === 'login'
			? 'Qual perfil deseja acessar?'
			: 'Que tipo de perfil deseja criar?';

	return (
		<S.Container>
			<StatusBar style="auto" />
			<Header />

			<Title text={title} customStyles={{ marginTop: 150 }} />

			<S.ButtonContainer>
				<Button text="Paciente" />

				<Button activeOpacity={0.65} text="Cuidador" variant="outline" />
			</S.ButtonContainer>
		</S.Container>
	);
}
