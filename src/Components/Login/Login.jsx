import React, { useContext, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './../../Context/UserContext';

const Login = () => {
	const { user,signIn, googleLogIn } = useContext(AuthContext);

	const navigate = useNavigate();
	const location = useLocation();

	const from = location.state?.from?.pathname || '/';


	useEffect(() => { 
		if (user && user.uid) {
			navigate(from, { replace: true });
			
		}
	 },[user,navigate])


	const handleSubmit = (e) => {
		e.preventDefault();
		let form = e.target;
		let email = form.email.value;
		let password = form.password.value;

		signIn(email, password)
			.then((result) => {
				const user = result.user;
				console.log(user);
			})
			.catch((err) => console.log(err));
	};

	const handleGoogleLogIn = () => {
		googleLogIn()
			.then((result) => {
				const user = result.user;
				console.log(user);

			})
			.catch((err) => console.log(err));
	};

	return (
		<div>
			<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-lg text-center">
					<h1 className="text-2xl font-bold sm:text-3xl">Login!</h1>
				</div>

				<form onSubmit={handleSubmit} className="mx-auto mt-8 mb-0 max-w-md space-y-4">
					<div>
						<label htmlFor="email" className="sr-only">
							Email
						</label>

						<div className="relative">
							<input
								type="email"
								name="email"
								className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
								placeholder="Enter email"
							/>
						</div>
					</div>

					<div>
						<label htmlFor="password" className="sr-only">
							Password
						</label>
						<div className="relative">
							<input
								type="password"
								name="password"
								className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
								placeholder="Enter password"
							/>
						</div>
					</div>
					<div className="flex items-center w-full my-4">
						<hr className="w-full text-black" />
						<p className="px-3 text-slate-900">OR</p>
						<hr className="w-full text-black" />
					</div>
					<button
						onClick={handleGoogleLogIn}
						aria-label="Login with Google"
						type="button"
						className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400 bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 32 32"
							className="w-5 h-5 fill-current">
							<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
						</svg>
						<p>Login with Google</p>
					</button>
					<div className="flex items-center justify-between">
						<p className="text-sm text-gray-500">
							No account?
							<Link className="underline ml-2 text-blue-700 font-bold" to="/register">
								Sign up
							</Link>
						</p>

						<button
							type="submit"
							className="ml-3 inline-block rounded-lg bg-gradient-to-r from-rose-700 to-pink-600 px-10 py-3 text-sm font-medium text-white">
							Login
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
