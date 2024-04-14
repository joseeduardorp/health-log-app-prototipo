import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
	padding: 20;
	background-color: #fff;

	flex: 1;
	flex-direction: column;
	align-items: center;
`;

export const Title = styled.Text`
	margin-top: 150;
	width: 100%;

	color: #665cf5;
	font-size: 46;
	font-weight: 800;
`;

export const ButtonContainer = styled.SafeAreaView`
	margin-top: 100;
	height: 90;

	gap: 10;
`;
