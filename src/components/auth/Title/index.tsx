import React from 'react';

import * as S from './styles';

import { IProps } from './types';

const Title: React.FC<IProps> = ({ text, customStyles }) => {
	return <S.Title style={customStyles}>{text}</S.Title>;
};

export default Title;
