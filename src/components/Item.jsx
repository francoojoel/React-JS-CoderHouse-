import React from 'react';

const Item = ({info}) => {
  return ( 
   <div className='Item-container'> 
      <div className='Product-card'>
         <img src={info.image} alt={info.title} />
         <h3 className='Item-name'>{info.title}</h3>
         <p className='Item-price'><b>${info.price}</b></p>
      </div>
   </div> 
  )
}

export default Item;