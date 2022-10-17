import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid';

const ReviewItems = ({ product, removeFromCart }) => {
	const { name, price, quantity, img, seller } = product;

	return (
		<div>
			<li className="flex flex-col py-6 sm:flex-row sm:justify-between">
				<div className="flex w-full space-x-2 sm:space-x-4">
					<img
						className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-gray-500"
						src={img}
						alt="CartProducts"
					/>
					<div className="flex flex-col justify-between w-full pb-4">
						<div className="flex justify-between w-full pb-2 space-x-2">
							<div className="space-y-1">
								<h3 className="text-lg font-semibold leading-snug sm:pr-8">{name}</h3>
								<p className="text-sm text-gray-400">{seller}</p>
								<p className="text-sm text-gray-400">Quantity : {quantity}</p>
							</div>
							<div className="text-right">
								<p className="text-lg font-semibold">$ {price}</p>
							</div>
						</div>
						<div className="flex text-sm divide-x">
							<button
								onClick={() => removeFromCart(product)}
								type="button"
								className="flex items-center px-2 py-1 pl-0 space-x-1">
								<TrashIcon className="w-4 h-4 fill-current text-red-600" />
								<span className="">Remove</span>
							</button>
						</div>
					</div>
				</div>
			</li>
		</div>
	);
};

export default ReviewItems;
