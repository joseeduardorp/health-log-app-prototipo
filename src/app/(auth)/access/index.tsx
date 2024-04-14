import { Link, useLocalSearchParams } from 'expo-router';
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
				<Link
					href={{ pathname: action, params: { profileType: 'patient' } }}
					asChild
				>
					<Button text="Paciente" />
				</Link>

				<Link
					href={{ pathname: action, params: { profileType: 'caregiver' } }}
					asChild
				>
					<Button activeOpacity={0.65} text="Cuidador" variant="outline" />
				</Link>
			</S.ButtonContainer>
		</S.Container>
	);
}
