import React from 'react';
import { Slot } from 'expo-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const Layout: React.FC = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<Slot />
		</QueryClientProvider>
	);
};

export default Layout;
