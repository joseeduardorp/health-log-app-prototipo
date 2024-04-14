import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const KeyboardView = styled.KeyboardAvoidingView`
	flex: 1;
`;

export const Wrapper = styled.ScrollView`
	padding: 20px;
	flex: 1;
`;

export const styles = StyleSheet.create({
	wrapper: {
		paddingBottom: 75,
		alignItems: 'center',
	},
});
