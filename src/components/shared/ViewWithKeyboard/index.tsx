import { Platform, TouchableWithoutFeedback } from 'react-native';

import * as S from './styles';

import { IProps } from './types';

const ViewWithKeyboard: React.FC<IProps> = ({ children }) => {
	return (
		<S.KeyboardView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
			<TouchableWithoutFeedback>
				<S.Wrapper
					contentContainerStyle={S.styles.wrapper}
					showsVerticalScrollIndicator={false}
				>
					{children}
				</S.Wrapper>
			</TouchableWithoutFeedback>
		</S.KeyboardView>
	);
};

export default ViewWithKeyboard;
