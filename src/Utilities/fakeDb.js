const addToDb = (id) => {
	let shoppingCart = {};

	const storedCart = localStorage.getItem('shopping-cart');
	if (storedCart) {
		shoppingCart = JSON.parse(storedCart);
	}

	//quantity

	let quantity = shoppingCart[id];
	if (quantity) {
		shoppingCart[id] = quantity + 1;
	} else {
		shoppingCart[id] = 1;
	}
	localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
};

const getStoredData = () => {
	let shoppingCart = {};

	const storedCart = localStorage.getItem('shopping-cart');
	if (storedCart) {
		shoppingCart = JSON.parse(storedCart);
	}
	return shoppingCart;
};

const removeFromDb = (id) => {
	const storedCart = localStorage.getItem('shopping-cart');
	if (storedCart) {
		const shoppingCart = JSON.parse(storedCart);
		if (id in shoppingCart) {
			delete shoppingCart[id];
			localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
		}
	}
};

export { addToDb, getStoredData as getStoredCart, removeFromDb };
