import { Text, TouchableOpacity } from 'react-native';
import { forwardRef } from 'react';

import { fill, outline } from './styles';

const Button = forwardRef(
	(
		{
			onPress = () => {},
			activeOpacity = 0.85,
			variant = 'fill',
			text = '',
			customStyles = {},
		},
		ref
	) => {
		const styles = variant === 'fill' ? fill : outline;

		return (
			<TouchableOpacity
				onPress={onPress}
				activeOpacity={activeOpacity}
				style={{ ...styles.button, ...customStyles }}
				ref={ref}
			>
				<Text style={{ ...styles.buttonText, ...customStyles }}>{text}</Text>
			</TouchableOpacity>
		);
	}
);

export default Button;
