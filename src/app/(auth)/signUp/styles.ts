import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
	background-color: #fff;
	flex: 1;
`;

export const Form = styled.View`
	margin: 50px 0;
	width: 100%;
	gap: 20px;
`;

export const Label = styled.View`
	width: 100%;
	gap: 5px;
`;

export const LabelText = styled.Text`
	font-size: 16px;
	font-weight: 600;
`;

export const ErrorMessage = styled.Text`
	color: #f00;
	font-size: 10px;
`;
