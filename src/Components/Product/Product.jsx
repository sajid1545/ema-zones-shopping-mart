import React from 'react';

const Product = ({ product, handleAddToCart }) => {
	const { name, price, ratings, img } = product;

	return (
		<div>
			<div className="card h-full bg-base-100 shadow-xl">
				<figure>
					<img src={img} alt="Shoes" />
				</figure>
				<div className="card-body">
					<h2 className="text-[24px]">{name}</h2>
					<p className="text-[20px] font-bold">Price : ${price}</p>
					<div className="card-actions">
						<button
							onClick={() => handleAddToCart(product)}
							className="btn-primary px-16 py-3 rounded-lg mx-auto mt-3">
							Add To Cart
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
