import React from 'react';
import { Link } from 'react-router-dom';
import SignUp from '../components/SignUp';

const RegisterPage = () => {
	return (
		<div>
			<h1>Sign Up</h1>

			<SignUp />

			<p>
				Arleady have an account? <Link to='/login'>Sign In</Link>
			</p>
		</div>
	);
};

export default RegisterPage;
