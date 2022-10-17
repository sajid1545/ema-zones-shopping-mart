import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Shop from './../Components/Shop/Shop';
import { productsAndCartLoader } from './../loaders/productsAndCartLoader';
import Orders from './../Components/Orders/Orders';
import About from './../Components/About/About';
import Inventory from './../Components/Inventory/Inventory';
import Login from './../Components/Login/Login';
import Register from './../Components/Register/Register';
import PrivateRoute from './PrivateRoute';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		children: [
			{
				path: '/',
				loader: productsAndCartLoader,
				element: <Shop />,
			},
			{
				path: '/shop',
				loader: productsAndCartLoader,
				element: <Shop />,
			},
			{
				path: '/orders',
				loader: productsAndCartLoader,
				element: <Orders />,
			},
			{
				path: '/inventory',
				element: (
					<PrivateRoute>
						<Inventory />
					</PrivateRoute>
				),
			},
			{
				path: '/about',
				element: (
					<PrivateRoute>
						<About />
					</PrivateRoute>
				),
			},
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/register',
				element: <Register />,
			},
		],
	},
]);
