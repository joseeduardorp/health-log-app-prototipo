import React from 'react';
import { useLocalSearchParams } from 'expo-router';

import Title from '@/components/auth/Title';

import * as S from './styles';

const Home: React.FC = () => {
	const { username } = useLocalSearchParams<{ username?: string }>();

	const welcomeMessage = username ? `Bem vindo, ${username}!` : 'Bem vindo!';

	return (
		<S.Container>
			<Title text={welcomeMessage} />
		</S.Container>
	);
};

export default Home;
