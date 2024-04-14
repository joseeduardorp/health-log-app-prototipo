import React from 'react';
import { StyleProp, TextInputProps, ViewStyle } from 'react-native';

export interface IProps extends TextInputProps {
	labelIcon?: React.ReactNode;
	buttonIcon?: React.ReactNode;
	onPressButton?: () => void;
	containerStyle?: StyleProp<ViewStyle>;
	buttonStyle?: StyleProp<ViewStyle>;
}
