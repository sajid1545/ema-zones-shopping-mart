import React, { useState } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { removeFromDb } from '../../Utilities/fakeDb';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';

const Orders = () => {
	const { initialCart } = useLoaderData();

	const [cart, setCart] = useState(initialCart);

	const removeFromCart = (selectedProduct) => {
		const newCart = [...cart, selectedProduct];
		removeFromDb(selectedProduct.id);
		const rest = cart.filter((c) => c.id !== selectedProduct.id);
		setCart(rest);
	};

	return (
		<div className="shop-container">
			<div className="review-items mx-auto m-10 ">
				<div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 bg-gradient-to-r from-slate-700 via-slate-900 to-black text-white font-semibold rounded-xl ">
					<h2 className="text-xl font-semibold">Your cart</h2>
					<ul className="flex flex-col divide-y divide-gray-700">
						{cart.map((product) => (
							<ReviewItems key={product.id} product={product} removeFromCart={removeFromCart} />
						))}

						{cart.length === 0 && (
							<h1 className="text-4xl">
								No Items to Review..Do some
								<Link to={'/'}>
									<span className="text-blue-600"> Shopping</span>{' '}
								</Link>{' '}
								first{' '}
							</h1>
						)}
					</ul>
				</div>
			</div>

			<div className="cart-container bg-[#FFE0B3] text-center p-5">
				<Cart cart={cart}>
					<Link>
						<button className="px-8 py-2 btn-wide bg-[#FF9900] rounded-lg mt-4 font-bold text-white">
							Proceed Shopping
						</button>
					</Link>
				</Cart>
			</div>
		</div>
	);
};

export default Orders;
