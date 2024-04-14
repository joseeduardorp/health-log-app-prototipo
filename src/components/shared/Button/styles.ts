import styled from 'styled-components/native';

import { variants } from './variants';
import { VariantOptions } from './types';

export const Button = styled.TouchableOpacity<{ variant: VariantOptions }>`
	width: 220px;
	height: 40px;
	background-color: ${({ variant }) => variants[variant].backgroundColor};
	border-color: ${({ variant }) => variants[variant].borderColor};
	border-width: 2px;
	border-radius: 5px;
	align-items: center;
	justify-content: center;
`;

export const Text = styled.Text<{ variant: VariantOptions }>`
	color: ${({ variant }) => variants[variant].color};
	font-size: 16px;
	font-weight: 700;
`;
