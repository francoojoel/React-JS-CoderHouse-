import React from 'react';
import { useCartContext } from '../../Context/CartContext';
import {AiFillDelete} from 'react-icons/ai/';

export const ItemCart = ({ product }) => {

  const {removeProduct} = useCartContext();

  return (
   <div className='Shopping-container'>
      <div className='Image-box'>
         <img src={product.image} alt={product.title} />
      </div>
      <div className='Cart-content'>
         <p className='Product-info'>{product.title}</p>
         <p className='Product-info'>Quantity: {product.quantity}</p>
         <p className='Product-info'>${product.price}</p>
         <div className='Delete-container'>
            <button onClick={() => removeProduct(product.id)} className='Delete-button'><AiFillDelete /></button>
         </div>     
      </div> 
   </div>
  )
}

export default ItemCart;