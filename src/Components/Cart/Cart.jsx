import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cart, children }) => {
	let total = 0;
	let shipping = 0;
	let quantity = 0;
	for (const product of cart) {
		total += product.price * product.quantity;
		shipping += product.shipping;
		quantity += product.quantity;
	}

	return (
		<div className="sticky top-0">
			<h1 className="text-4xl font-bold">Cart Overview</h1>
			<div className="space-y-5 mt-5 font-semibold ">
				<h3>Selected Items : {quantity}</h3>
				<h3>Price : ${total}</h3>
				<h3>Shipping Price : ${shipping}</h3>
				<h1 className="text-2xl">Grand Price : ${total + shipping}</h1>
				
				{children}
					
			</div>
		</div>
	);
};

export default Cart;
