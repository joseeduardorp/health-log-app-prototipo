import { StatusBar } from 'expo-status-bar';
import { useLocalSearchParams, router } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';
import { useState } from 'react';

import Header from '@/components/auth/Header';
import Title from '@/components/auth/Title';
import Button from '@/components/shared/Button';
import ViewWithKeyboard from '@/components/shared/ViewWithKeyboard';
import Input from '@/components/shared/Input';

import * as S from './styles';

import { ProfileType } from './types';

const profileTypesTranslate: Record<ProfileType, string> = {
	patient: 'paciente',
	caregiver: 'cuidador',
};

export default function Login() {
	const { profileType } = useLocalSearchParams<{ profileType: ProfileType }>();
	const [hidePassword, setHidePassword] = useState<boolean>(true);

	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	let title: string =
		'Acessar perfil de ' + profileTypesTranslate[profileType as ProfileType];

	const toggleShowPassword = () => setHidePassword((prev) => !prev);

	const send = () => {
		if (!email || !password) {
			alert('Preencha todos os campos!');
			return;
		}

		setEmail('');
		setPassword('');

		router.navigate({
			pathname: 'home',
			params: {
				profileType,
			},
		});
	};

	return (
		<S.Container>
			<StatusBar style="auto" />

			<ViewWithKeyboard>
				<Header customStyles={{ top: 20, left: 0 }} />

				<Title text={title} customStyles={{ marginTop: 150 }} />

				<S.Form>
					<S.Label>
						<S.LabelText>Email</S.LabelText>

						<Input inputMode="email" value={email} onChangeText={setEmail} />
					</S.Label>

					<S.Label>
						<S.LabelText>Senha</S.LabelText>

						<Input
							value={password}
							onChangeText={setPassword}
							secureTextEntry={hidePassword}
							onPressButton={toggleShowPassword}
							buttonIcon={
								<Feather
									name={hidePassword ? 'eye-off' : 'eye'}
									size={24}
									color="#999"
								/>
							}
						/>
					</S.Label>

					<S.Link href={{ pathname: 'signUp', params: { profileType } }}>
						Esqueci minha senha
					</S.Link>
				</S.Form>

				<Button text="Entrar" onPress={send} />
			</ViewWithKeyboard>
		</S.Container>
	);
}
