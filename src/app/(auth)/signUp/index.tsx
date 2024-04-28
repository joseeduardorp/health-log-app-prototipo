import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useLocalSearchParams, router } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ActivityIndicator } from 'react-native';
import axios from 'axios';

import Header from '@/components/auth/Header';
import Title from '@/components/auth/Title';
import Button from '@/components/shared/Button';
import ViewWithKeyboard from '@/components/shared/ViewWithKeyboard';
import Input from '@/components/shared/Input';

import { api } from '@/services/api';

import * as S from './styles';

import {
	ProfileType,
	SignUpData,
	SignUpDataSchema,
	ISignUpResponse,
} from './types';

const profileTypesTranslate: Record<ProfileType, string> = {
	patient: 'paciente',
	caregiver: 'cuidador',
};

const SignUp: React.FC = () => {
	const { profileType } = useLocalSearchParams<{ profileType: ProfileType }>();
	const [hidePassword, setHidePassword] = useState<boolean>(true);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<SignUpData>({
		resolver: zodResolver(SignUpDataSchema),
	});

	let title: string =
		'Criar perfil de ' + profileTypesTranslate[profileType as ProfileType];

	const toggleShowPassword = () => setHidePassword((prev) => !prev);

	const onSubmit: SubmitHandler<SignUpData> = async (data) => {
		setIsLoading(true);

		try {
			const res = await api.post<ISignUpResponse>('/signup', {
				...data,
				accountType: profileType,
			});
			const user = res.data.user;

			router.navigate({
				pathname: 'home',
				params: {
					username: user.name,
				},
			});
		} catch (error) {
			if (axios.isAxiosError(error)) {
				console.log(error.response?.status);
				console.log(error.response?.data);

				alert(error.response?.data.message);
			} else {
				console.log(error);
			}
		} finally {
			setIsLoading(false);
		}
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
							defaultValue=""
							disabled={isLoading}
							render={({ field: { value, onChange, disabled } }) => (
								<Input
									value={value}
									onChangeText={onChange}
									editable={!disabled}
								/>
							)}
							name="name"
						/>

						{errors.name && (
							<S.ErrorMessage>{errors.name.message}</S.ErrorMessage>
						)}
					</S.Label>

					<S.Label>
						<S.LabelText>Email</S.LabelText>

						<Controller
							control={control}
							rules={{ required: true }}
							defaultValue=""
							disabled={isLoading}
							render={({ field: { value, onChange, disabled } }) => (
								<Input
									inputMode="email"
									value={value}
									onChangeText={onChange}
									editable={!disabled}
								/>
							)}
							name="email"
						/>

						{errors.email && (
							<S.ErrorMessage>{errors.email.message}</S.ErrorMessage>
						)}
					</S.Label>

					<S.Label>
						<S.LabelText>Senha</S.LabelText>

						<Controller
							control={control}
							rules={{ required: true }}
							defaultValue=""
							disabled={isLoading}
							render={({ field: { value, onChange, disabled } }) => (
								<Input
									value={value}
									onChangeText={onChange}
									editable={!disabled}
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
							<S.ErrorMessage>{errors.password.message}</S.ErrorMessage>
						)}
					</S.Label>
				</S.Form>

				{isLoading ? (
					<ActivityIndicator />
				) : (
					<Button text="Cadastrar" onPress={handleSubmit(onSubmit)} />
				)}
			</ViewWithKeyboard>
		</S.Container>
	);
};

export default SignUp;
