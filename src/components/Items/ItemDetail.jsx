import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';
import ItemCount from './ItemCount';

const ItemDetail = ({data}) => {

  const [goToCart, setCart] = useState(false);
  const { addProduct } = useCartContext();

  const onAdd = (quantity, item) => {
    setCart(true);
    addProduct(data, quantity, item);
  }
  return (
    <div className='Detail-container'> 
      <div className='Detail-image'>
        <img src={data.image} alt={data.title} />
      </div>
      <div className='Detail-info'>
        <h3 className='Item-name'>{data.title}</h3>
        <p className='Item-price'>${data.price}</p>
        <p className='Item-description'>{data.description}</p>    
      </div> 
      {
        goToCart
          ? <Link className='Checkout-link' to='/cart'>
            <button className='Go-cart'>Go to cart</button>
            </Link>
          : <ItemCount initial={1} stock={15} onAdd={onAdd} />
        }
  </div> 
  )
}

export default ItemDetail;
