import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './../../Context/UserContext';

const Register = () => {
	const { createUser } = useContext(AuthContext);

	const [error, setError] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		let form = e.target;
		let name = form.name.value;
		let email = form.email.value;
		let password = form.password.value;

		if (password.length < 6) {
			setError('password must have at least 6 characters');
			return;
		}

		setError(null);

		createUser(email, password)
			.then((result) => {
				const user = result.user;
				console.log(user);
				form.reset();
			})
			.catch((err) => {
				console.log(error);
				setError(err.message);
			});
	};

	return (
		<div>
			<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-lg text-center">
					<h1 className="text-2xl font-bold sm:text-3xl">Register!</h1>
				</div>

				<p className="text-xl font-bold text-center my-5 text-red-600 ">{error}</p>

				<form onSubmit={handleSubmit} className="mx-auto mt-8 mb-0 max-w-md space-y-4">
					<div>
						<label htmlFor="name" className="sr-only">
							Name
						</label>

						<div className="relative">
							<input
								type="text"
								name="name"
								className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
								placeholder="Enter Name"
								required
							/>
						</div>
					</div>
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
								required
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
								required
							/>
						</div>
					</div>

					<div className="flex items-center justify-between">
						<p className="text-sm text-gray-500">
							Already have an account?
							<Link className="underline ml-2 text-blue-700 font-bold" to="/login">
								Login
							</Link>
						</p>

						<button
							type="submit"
							className="ml-3 inline-block rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 px-10 py-3 text-sm font-medium text-white">
							Register
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Register;
