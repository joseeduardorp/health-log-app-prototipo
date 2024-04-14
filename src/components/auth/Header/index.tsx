import Feather from '@expo/vector-icons/Feather';
import { router } from 'expo-router';

import * as S from './styles';

export default function Header() {
	return (
		<S.BackButton onPress={() => router.back()} activeOpacity={0.7}>
			<Feather name="arrow-left" size={40} color="#999" />
		</S.BackButton>
	);
}
