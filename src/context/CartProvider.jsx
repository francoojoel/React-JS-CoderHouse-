import React, { useContext, useState } from "react";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

   console.log('carrito' ,cart);

	 const addProduct = (item, newQuantity) => {
	     const { quantity = 0 } = cart.find(prod => prod.id === item.id) || {};
	     const newCart = cart.filter(prod => prod.id !== item.id);
	     setCart([...newCart, { ...item, quantity: quantity + newQuantity }])
	 }

	const clearCart = () => setCart([]);

	const isInCart = (id) =>
		cart.find((product) => product.id === id) ? true : false;

	const removeProduct = (id) =>
		setCart(cart.filter((product) => product.id !== id));

	return (
		<CartContext.Provider
			value={{ clearCart, isInCart, removeProduct, addProduct, cart }}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;