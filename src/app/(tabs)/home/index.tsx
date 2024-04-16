import React from 'react';
import { useLocalSearchParams } from 'expo-router';

import Title from '@/components/auth/Title';

import * as S from './styles';

import { ProfileType } from './types';

const Home: React.FC = () => {
	const { profileType } = useLocalSearchParams<{ profileType: ProfileType }>();

	return (
		<S.Container>
			<Title text="Bem vindo!" />
		</S.Container>
	);
};

export default Home;
