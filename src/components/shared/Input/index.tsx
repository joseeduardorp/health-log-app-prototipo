import React from 'react';
import { TouchableOpacity } from 'react-native';

import * as S from './styles';

import { IProps } from './types';

const Input: React.FC<IProps> = ({
	labelIcon,
	buttonIcon,
	onPressButton,
	containerStyle,
	buttonStyle,
	...rest
}) => {
	return (
		<S.Container style={containerStyle}>
			{labelIcon ? labelIcon : null}

			<S.Input {...rest} />

			{buttonIcon ? (
				<TouchableOpacity
					activeOpacity={0.85}
					onPress={onPressButton}
					style={buttonStyle}
				>
					{buttonIcon}
				</TouchableOpacity>
			) : null}
		</S.Container>
	);
};

export default Input;
