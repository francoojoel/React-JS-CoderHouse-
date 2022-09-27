import React from 'react';
import { useCartContext } from '../context/CartContext';
import {AiFillDelete} from 'react-icons/ai/';

export const ItemCart = ({ product }) => {

  const {removeProduct} = useCartContext();

  return (
   <div className='Shopping-container'>
      <div className='Image-box'>
         <img src={product.image} alt="Sneaker" />
      </div>
      <div className='Cart-content'>
         <h3 className='Product-info'>{product.title}</h3>
         <p className='Product-info'>{product.quantity}</p>
         <p className='Product-info'>{product.price}</p>
         <div className='Delete-container'>
            <button onClick={() => removeProduct(product.id)} className='Delete-button'><AiFillDelete /></button>
         </div>     
      </div> 
   </div>
  )
}

export default ItemCart;