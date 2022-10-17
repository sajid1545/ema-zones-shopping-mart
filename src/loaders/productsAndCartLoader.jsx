import { getStoredCart } from '../Utilities/fakeDb';

export const productsAndCartLoader = async () => {
	//get products
	const productsData = await fetch(`products.json`);
	const products = await productsData.json();

	//get storedCart
	const storedCart = getStoredCart();
	let initialCart = [];
	for (const id in storedCart) {
		const addedProduct = products.find((product) => product.id === id);
		const quantity = storedCart[id];
		if (addedProduct) {
			addedProduct.quantity = quantity;
			initialCart.push(addedProduct);
		}
	}

	return { products, initialCart };
};
