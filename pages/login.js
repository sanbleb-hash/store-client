import { useContext, useEffect, useState } from 'react';
import cookies from 'js-cookie';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';
import { BiLoaderAlt } from 'react-icons/bi';
import { useRouter } from 'next/router';
import { authContext } from '../utils/context/userContext';

const SignUp = () => {
	const { state } = useContext(authContext);
	const [user, userLoading] = state;

	const navigate = useRouter();
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.id]: e.target.value });
	};
	const { name, email, password, password2 } = formData;

	const [isLogin, setIsLoggedIn] = useState(false);

	// email and password login
	const handleSignIn = async (e) => {
		e.preventDefault();
		try {
			if (!isLogin && password !== password2) {
				toast.error('Passwords do not match');
				return;
			}
			if (!isLogin && name === '') {
				toast.error('Name is required');
				return;
			}

			if (email === '' || password === '') {
				toast.error('Email and password are required');
				return;
			} else {
				if (!isLogin) {
					dispatch({ type: 'LOGIN_REQUEST' });
					const { data } = await axios.post('/api/users/register', {
						name,
						email,
						password,
					});
					dispatch({
						type: 'USER_LOGIN',
						payload: data,
						token: data.token,
						isLoading: false,
					});
					cookies.set('user', data);
					data;
					navigate.push('/');
				} else {
					dispatch({ type: 'LOGIN_REQUEST' });
					const { data } = await axios.post('/api/users/login', {
						email,
						password,
					});
					dispatch({
						type: 'USER_LOGIN',
						payload: data,
						token: data.token,
						isLoading: false,
					});
					cookies.set('user', data);

					setTimeout(function () {
						navigate.push('/');
					}, 2000);
				}
			}
		} catch (error) {
			dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
		}
	};

	useEffect(() => {
		if (user) {
			setTimeout(() => navigate.push('/'), 2000);
		}
	}, [navigate]);
	if (userLoading) {
		return (
			<div className=' w-screen h-screen flex items-center justify-center '>
				<BiLoaderAlt className=' animate-spin text-5xl text-pink-300' />
			</div>
		);
	}
	return (
		<section className=' container py-10 mx-auto min-h-[90vh] '>
			<h1 className=' text-center '> {isLogin ? 'Sign in' : 'sign up'}</h1>
			<article className='flex flex-col items-center justify-center'>
				<form onSubmit={handleSignIn} className='w-full max-w-xs'>
					{!isLogin && (
						<div className='w-full mb-6 md:mb-0'>
							<label
								className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
								htmlFor='grid-first-name'
							>
								Name
							</label>
							<input
								className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
								id='name'
								value={name}
								onChange={handleChange}
								type='text'
								placeholder='Jane'
							/>
						</div>
					)}
					<div className='flex flex-wrap -mx-3 mb-4'>
						<div className='w-full px-3'>
							<label
								className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
								htmlFor='email'
							>
								Email
							</label>
							<input
								className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
								id='email'
								value={email}
								onChange={handleChange}
								type='email'
								placeholder='
                        email'
							/>
						</div>
					</div>
					<div className='flex flex-wrap -mx-3 mb-4'>
						<div className='w-full px-3'>
							<label
								className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
								htmlFor='password'
							>
								Password
							</label>
							<input
								className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
								id='password'
								value={password}
								onChange={handleChange}
								type='password'
								placeholder='******************'
							/>
						</div>
						{!isLogin && (
							<div className='w-full pt-3 px-3'>
								<label
									className='block uppercase tracking-wide text-gray-700 text-xs font-bold  mb-2'
									htmlFor='password2'
								>
									confirm Password
								</label>
								<input
									className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
									id='password2'
									value={password2}
									onChange={handleChange}
									type='password'
									placeholder='******************'
								/>
							</div>
						)}
					</div>
					<div className=' flex justify-between items-center'>
						<button
							type='submit'
							className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
						>
							{isLogin ? 'sign in' : 'sign up'}
						</button>
					</div>
				</form>
			</article>
			<span className='flex gap-2 items-center justify-center'>
				{isLogin ? <p>dont have account ?</p> : <p>already have account ?</p>}

				<button
					type='submit'
					className=' underline text-purple-500 hover:text-purple-400'
					onClick={() => setIsLoggedIn(!isLogin)}
				>
					{isLogin ? 'Sign up' : 'Sign in'}
				</button>
			</span>
		</section>
	);
};

export default SignUp;
