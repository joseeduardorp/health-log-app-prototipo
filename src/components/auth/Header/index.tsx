import React from 'react';
import Feather from '@expo/vector-icons/Feather';
import { router } from 'expo-router';

import * as S from './styles';

import { IProps } from './types';

const Header: React.FC<IProps> = ({ customStyles }) => {
	return (
		<S.BackButton
			onPress={() => router.back()}
			activeOpacity={0.7}
			style={customStyles}
		>
			<Feather name="arrow-left" size={40} color="#999" />
		</S.BackButton>
	);
};

export default Header;
