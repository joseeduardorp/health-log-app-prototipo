import { Tabs } from 'expo-router';
import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Layout: React.FC = () => {
	return (
		<Tabs>
			<Tabs.Screen
				name="home/index"
				options={{
					title: 'Inicio',
					tabBarIcon: () => (
						<FontAwesome name="home" size={34} color="#665cf5" />
					),
					tabBarShowLabel: false,
				}}
			/>
		</Tabs>
	);
};

export default Layout;
