import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useLocalSearchParams, router } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

import Header from '@/components/auth/Header';
import Title from '@/components/auth/Title';
import Button from '@/components/shared/Button';
import ViewWithKeyboard from '@/components/shared/ViewWithKeyboard';
import Input from '@/components/shared/Input';

import * as S from './styles';

import { ProfileType, SignUpInputs } from './types';

const profileTypesTranslate: Record<ProfileType, string> = {
	patient: 'paciente',
	caregiver: 'cuidador',
};

const SignUp: React.FC = () => {
	const { profileType } = useLocalSearchParams<{ profileType: ProfileType }>();
	const [hidePassword, setHidePassword] = useState<boolean>(true);

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<SignUpInputs>({
		defaultValues: {
			name: '',
			email: '',
			password: '',
		},
	});

	let title: string =
		'Criar perfil de ' + profileTypesTranslate[profileType as ProfileType];

	const toggleShowPassword = () => setHidePassword((prev) => !prev);

	const onSubmit: SubmitHandler<SignUpInputs> = (data) => {
		router.navigate({
			pathname: 'home',
			params: {
				profileType,
				username: data.name,
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
						<S.LabelText>Nome completo</S.LabelText>

						<Controller
							control={control}
							rules={{ required: true }}
							render={({ field: { value, onChange } }) => (
								<Input value={value} onChangeText={onChange} />
							)}
							name="name"
						/>

						{errors.name && <S.ErrorMessage>Campo obrigatório</S.ErrorMessage>}
					</S.Label>

					<S.Label>
						<S.LabelText>Email</S.LabelText>

						<Controller
							control={control}
							rules={{ required: true }}
							render={({ field: { value, onChange } }) => (
								<Input
									inputMode="email"
									value={value}
									onChangeText={onChange}
								/>
							)}
							name="email"
						/>

						{errors.email && <S.ErrorMessage>Campo obrigatório</S.ErrorMessage>}
					</S.Label>

					<S.Label>
						<S.LabelText>Senha</S.LabelText>

						<Controller
							control={control}
							rules={{ required: true }}
							render={({ field: { value, onChange } }) => (
								<Input
									value={value}
									onChangeText={onChange}
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
							)}
							name="password"
						/>

						{errors.password && (
							<S.ErrorMessage>Campo obrigatório</S.ErrorMessage>
						)}
					</S.Label>
				</S.Form>

				<Button text="Cadastrar" onPress={handleSubmit(onSubmit)} />
			</ViewWithKeyboard>
		</S.Container>
	);
};

export default SignUp;
