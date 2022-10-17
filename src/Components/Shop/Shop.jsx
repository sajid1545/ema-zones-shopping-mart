import React, { useEffect, useState } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { addToDb, deleteDb, getStoredCart } from '../../Utilities/fakeDb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
	const { products } = useLoaderData();

	const [cart, setCart] = useState([]);

	useEffect(() => {
		const storedCart = getStoredCart();
		let savedCart = [];
		for (const id in storedCart) {
			const addedProduct = products.find((product) => product.id === id);
			if (addedProduct) {
				let quantity = storedCart[id];
				addedProduct.quantity = quantity;
				savedCart.push(addedProduct);
			}
		}
		setCart(savedCart);
	}, [products]);

	const handleAddToCart = (selectedProduct) => {
		let newCart = [];
		let exist = cart.find((p) => p.id === selectedProduct.id);
		if (!exist) {
			selectedProduct.quantity = 1;
			newCart = [...cart, selectedProduct];
		} else {
			let rest = cart.filter((p) => p.id !== selectedProduct.id);
			selectedProduct.quantity = selectedProduct.quantity + 1;
			newCart = [...rest, selectedProduct];
		}
		setCart(newCart);
		addToDb(selectedProduct.id);
	};

	const handleDeleteCart = () => {
		deleteDb();
		setCart([]);
	};

	return (
		<div className="shop-container">
			<div className="products-container grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
				{products.map((product) => (
					<Product key={product.id} product={product} handleAddToCart={handleAddToCart} />
				))}
			</div>

			<div className="cart-container bg-[#FFE0B3] text-center p-5">
				<Cart cart={cart}>
					<Link to={'/orders'}>
						<button className="px-8 py-2 btn-wide bg-[#FF9900] rounded-lg mt-4 font-bold text-white">
							Review Items
						</button>
					</Link>
					<Link>
						<button onClick={handleDeleteCart} className="px-8 py-2 btn-wide bg-red-700 rounded-lg mt-4 font-bold text-white">
							Clear All
						</button>
					</Link>
				</Cart>
			</div>
		</div>
	);
};

export default Shop;

// ema-zones-shopping-mart
