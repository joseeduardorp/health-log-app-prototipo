import React from 'react';

import useLoginModel from './model';
import LoginView from './view';

const LoginViewModel: React.FC = () => {
	const loginModel = useLoginModel();

	return <LoginView {...loginModel} />;
};

export default LoginViewModel;
