import { forwardRef } from 'react';

import * as S from './styles';

import { IProps } from './types';

const Button: React.FC<IProps> = forwardRef(
	(
		{
			onPress = () => {},
			activeOpacity = 0.85,
			variant = 'fill',
			text = '',
			customStyles,
		},
		ref
	) => {
		return (
			<S.Button
				onPress={onPress}
				activeOpacity={activeOpacity}
				variant={variant}
				{...ref}
			>
				<S.Text variant={variant}>{text}</S.Text>
			</S.Button>
		);
	}
);

export default Button;
