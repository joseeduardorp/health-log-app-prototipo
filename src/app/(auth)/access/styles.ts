import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
	padding: 20px;
	background-color: #fff;

	flex: 1;
	flex-direction: column;
	align-items: center;
`;

export const Title = styled.Text`
	margin-top: 150px;
	width: 100%;

	color: #665cf5;
	font-size: 46px;
	font-weight: 800;
`;

export const ButtonContainer = styled.SafeAreaView`
	margin-top: 100px;
	height: 90px;

	gap: 10px;
`;
