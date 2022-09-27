import React, { useContext, useState } from "react";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addProduct = (item, quantity) => {
		const newItem = {...item, quantity}

		if(cart.some(product => product.id === newItem.id )) {
			const newCart = cart.map(product => {
				if(product.id === newItem.id) {
					product.quantity = product.quantity + newItem.quantity;
				}
				return product;
			})
			setCart(newCart);
		}else {
			setCart({...cart, newItem});
		}
	};

	const totalPrice = () => {
		return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
	};

	const totalProducts = () =>
		cart.reduce(
			(collector, currentProduct) => collector + currentProduct.quantity,
			0,
		);

	const clearCart = () => setCart([]);

	const isInCart = (id) =>
		cart.find((product) => product.id === id) ? true : false;

	const removeProduct = (id) =>
		setCart(cart.filter((product) => product.id !== id));

		console.log('carrito' ,cart);

	return (
		<CartContext.Provider
			value={{
				clearCart,
				isInCart,
				removeProduct,
				addProduct,
				totalPrice,
				totalProducts,
				cart
			 }}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;