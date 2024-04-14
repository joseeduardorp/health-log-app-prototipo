import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
	padding: 20;
	background-color: '#fff';

	flex: 1;
	flex-direction: column;
	align-items: center;
`;

export const ImageContainer = styled.View`
	margin-top: 150;
	height: 300;
	width: 100%;

	align-items: center;
	justify-content: center;
`;

export const Image = styled.Image`
	width: 100%;
`;

export const ButtonContainer = styled.View`
	margin-top: 100;
	height: 90;

	gap: 10;
`;
