import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
	padding: 20px;
	background-color: '#fff';

	flex: 1;
	flex-direction: column;
	align-items: center;
`;

export const ImageContainer = styled.View`
	margin-top: 150px;
	height: 300px;
	width: 100%;

	align-items: center;
	justify-content: center;
`;

export const Image = styled.Image`
	width: 100%;
`;

export const ButtonContainer = styled.View`
	margin-top: 100px;
	height: 90px;

	gap: 10px;
`;
