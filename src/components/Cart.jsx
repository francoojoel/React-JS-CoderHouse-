import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import ItemCart from "./ItemCart";

const Cart = () => {
	const { cart, totalPrice } = useCartContext();

	if (cart.length === 0) {
		return (
			<div className="Cart-info">
				<p className="Empty-cart">Your cart is empty</p>
				<Link className=" Products-link" to="/">Look for our products</Link>
			</div>
		);
	}
   
	return (
      
		<div>
         console.log(cart);
		 {cart.map(product =>(
		 <ItemCart key={product.id} producto={product} />))}
			<p>Total: {totalPrice()}</p>
		</div>
	);
};

export default Cart;
