import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartProvider';
import ItemCount from './ItemCount';

const ItemDetail = ({data}) => {

  const [goToCart, setCart] = useState(false);
  const { addProduct } = useCartContext();

  const onAdd = (quantity) => {
    setCart(true);
    addProduct(data, quantity);
  }
  return (
    <div className='Item-container'> 
      <div className='Product-card'>
       <img src={data.image} alt={data.title} />
       <h3 className='Item-name'>{data.title}</h3>
       <p className='Item-price'>{data.price}</p>
       <p className='Item-description'>
          Item description
       </p>
        {
          goToCart
          ? <Link className='Checkout-link' to='/cart'>
            <button className='Checkout-button'>Proceed to checkout</button>
          </Link>
          : <ItemCount initial={0} stock={15} onAdd={onAdd} />
        } 
    </div>
 </div> 
  )
}

export default ItemDetail;
