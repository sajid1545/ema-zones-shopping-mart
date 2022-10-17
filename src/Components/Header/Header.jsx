import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from '../../images/Logo.svg';
import './Header.css';
import { AuthContext } from './../../Context/UserContext';

const Header = () => {
	const { user, logOut } = useContext(AuthContext);

	return (
		<nav className="header h-full">
			<img src={logo} alt="" />
			<div className="text-white flex flex-col md:flex-row space-y-8 my-5 md:my-0 md:space-y-0">
				<NavLink className={({ isActive }) => (isActive ? 'active' : undefined)} to="/shop">
					Shop
				</NavLink>
				<NavLink to="/orders">Orders</NavLink>
				<NavLink to="/inventory">Inventory</NavLink>
				<NavLink to="/about">About</NavLink>

				{user?.uid ? (
					<button onClick={logOut} className="ml-8 px-6">
						Log Out
					</button>
				) : (
					<>
						<Link to="/register">Register</Link>
						<Link to="/login">Login</Link>
					</>
				)}
			</div>
		</nav>
	);
};

export default Header;
