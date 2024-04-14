import { TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { router } from 'expo-router';

import { styles } from './styles';

export default function Header() {
	return (
		<TouchableOpacity
			onPress={() => router.back()}
			activeOpacity={0.7}
			style={styles.backButton}
		>
			<Feather name="arrow-left" size={40} color="#999" />
		</TouchableOpacity>
	);
}
