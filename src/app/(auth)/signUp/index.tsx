import React from 'react';

import useSignUpModel from './model';
import SignUpView from './view';

const SignUpViewModel: React.FC = () => {
	const signUpModel = useSignUpModel();

	return <SignUpView {...signUpModel} />;
};

export default SignUpViewModel;
