import React from 'react';
import Form from './Form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/slices/userSlice';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogin = (email, password) => {
		const auth = getAuth();
		signInWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				console.log(user);
				dispatch(
					setUser({
						email: user.email,
						id: user.uid,
						token: user.accessToken,
					})
				);
				navigate('/');
			})
			.catch(console.error);
	};

	return (
		<div>
			<Form title='Sign in' handleClick={handleLogin} />
		</div>
	);
};

export default Login;
