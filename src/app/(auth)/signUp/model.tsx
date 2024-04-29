import { useState } from 'react';
import { useLocalSearchParams, router } from 'expo-router';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

import { api } from '@/services/api';

import { ProfileType, SignUpData, SignUpDataSchema, IResponse } from './types';

const postData = async (data: SignUpData) => {
	return await api.post<IResponse>('/signup', data);
};

const useSignUpModel = () => {
	const { profileType } = useLocalSearchParams<{ profileType: ProfileType }>();
	const [hidePassword, setHidePassword] = useState<boolean>(true);

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<SignUpData>({
		resolver: zodResolver(SignUpDataSchema),
	});

	const { mutate, isPending } = useMutation({
		mutationFn: postData,
		onSuccess: (data) => {
			if (data) {
				router.navigate({
					pathname: 'home',
					params: {
						profileType,
						username: data.data.user.name,
					},
				});
			}
		},
		onError: (error) => {
			if (axios.isAxiosError(error)) {
				console.log(error.response?.data);
			}

			alert('Algo deu errado :(');
		},
	});

	const toggleShowPassword = () => setHidePassword((prev) => !prev);

	const onSubmit: SubmitHandler<SignUpData> = (data) => {
		const userData: SignUpData = {
			...data,
			accountType: profileType as ProfileType,
		};

		mutate(userData);
	};

	return {
		profileType,
		hidePassword,
		control,
		handleSubmit,
		errors,
		isPending,
		toggleShowPassword,
		onSubmit,
	};
};

export default useSignUpModel;
