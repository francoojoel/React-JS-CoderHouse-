import React from 'react';
import {FaShoppingCart} from 'react-icons/fa/';
import { useCartContext } from '../context/CartContext';

const CartWidget = () => {
   const { totalProducts } = useCartContext();

   return (
      <>
         <FaShoppingCart />
         <div className='Greeting-info'>{totalProducts() || ''}</div>
      </>
   )
}

export default CartWidget;


