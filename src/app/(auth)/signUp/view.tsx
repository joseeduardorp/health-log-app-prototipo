import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Feather from '@expo/vector-icons/Feather';
import { Controller } from 'react-hook-form';
import { ActivityIndicator } from 'react-native';

import Header from '@/components/auth/Header';
import Title from '@/components/auth/Title';
import Button from '@/components/shared/Button';
import ViewWithKeyboard from '@/components/shared/ViewWithKeyboard';
import Input from '@/components/shared/Input';

import * as S from './styles';

import { ProfileType, SignUpViewProps } from './types';

const profiles: Record<ProfileType, string> = {
	patient: 'paciente',
	caregiver: 'cuidador',
};

const SignUpView: React.FC<SignUpViewProps> = ({
	profileType,
	control,
	isPending,
	errors,
	hidePassword,
	toggleShowPassword,
	handleSubmit,
	onSubmit,
}) => {
	return (
		<S.Container>
			<StatusBar style="auto" />

			<ViewWithKeyboard>
				<Header customStyles={{ top: 20, left: 0 }} />

				<Title
					text={`Criar perfil de ${profiles[profileType as ProfileType]}`}
					customStyles={{ marginTop: 150 }}
				/>

				<S.Form>
					<S.Label>
						<S.LabelText>Nome completo</S.LabelText>

						<Controller
							control={control}
							rules={{ required: true }}
							defaultValue=""
							render={({ field: { value, onChange } }) => (
								<Input
									value={value}
									onChangeText={onChange}
									editable={!isPending}
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
							render={({ field: { value, onChange } }) => (
								<Input
									inputMode="email"
									value={value}
									onChangeText={onChange}
									editable={!isPending}
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
							render={({ field: { value, onChange } }) => (
								<Input
									value={value}
									onChangeText={onChange}
									editable={!isPending}
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

				{isPending ? (
					<ActivityIndicator />
				) : (
					<Button text="Cadastrar" onPress={handleSubmit(onSubmit)} />
				)}
			</ViewWithKeyboard>
		</S.Container>
	);
};

export default SignUpView;
