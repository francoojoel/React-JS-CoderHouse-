import React from 'react';

const ItemDetail = ({data}) => {
  return (
    <div className='Item-container'> 
    <div className='Product-card'>
       <img src={data.image} alt={data.title} />
       <h3 className='Item-name'>{data.title}</h3>
       <p className='Item-price'><b>${data.price}</b></p>
       <p className='Item-description'>
        Regular fit, slip-on, textile upper, imported, color: blis lilac.
       </p>
    </div>
 </div> 
  )
}

export default ItemDetail;
