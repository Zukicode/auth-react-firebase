import React from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { removeUser } from '../redux/slices/userSlice';
import { useAuth } from './../hooks/use-auth';

const HomePage = () => {
	const dispatch = useDispatch();
	const { isAuth, email } = useAuth();

	return isAuth ? (
		<div>
			<h1>Welcome</h1>

			<button onClick={() => dispatch(removeUser())}>
				Log out from {email}
			</button>
		</div>
	) : (
		<Navigate to='/login' />
	);
};

export default HomePage;
