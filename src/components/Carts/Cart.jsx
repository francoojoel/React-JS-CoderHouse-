import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import ItemCart from "./ItemCart";

const Cart = () => {
	const { cart, totalPrice, } = useCartContext();

	if (cart.length === 0) {
		return (
			<div className="Cart-info">
				<p className="Empty-cart">Your cart is empty</p>
				<Link className=" Products-link" to="/">Look for our products</Link>
			</div>
		);
	}
   
	return (
      <>
         {
            cart.map(product => <ItemCart key={product.id} product={product} />) 
         }
         <p className="Total-price">Total: ${ totalPrice() }</p>
		 <div className="Check-button-container">
			<Link to='/checkout'>
				<button className="Checkout-button">Proceed to checkout</button>
			</Link>	
		 </div>
		 
      </>
	);
};

export default Cart;
