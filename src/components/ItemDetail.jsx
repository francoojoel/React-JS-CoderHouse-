import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({data}) => {
  return (
    <div className='Item-container'> 
      <div className='Product-card'>
       <img src={data.image} alt={data.title} />
       <h3 className='Item-name'>{data.title}</h3>
       <p className='Item-price'><b>${data.price}</b></p>
       <p className='Item-description'>
          Item description
       </p>
       <ItemCount initial={0} stock={15} />
    </div>
 </div> 
  )
}

export default ItemDetail;
