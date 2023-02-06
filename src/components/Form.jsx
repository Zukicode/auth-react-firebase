import { useState } from 'react';

const Form = ({ title, handleClick }) => {
	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');

	return (
		<div>
			<input
				type='text'
				value={email}
				onChange={e => setEmail(e.target.value)}
				placeholder='Your Email'
			/>
			<input
				type='password'
				value={pass}
				onChange={e => setPass(e.target.value)}
				placeholder='Your Password'
			/>
			<button onClick={() => handleClick(email, pass)}>{title}</button>
		</div>
	);
};

export default Form;
