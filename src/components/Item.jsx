import React from 'react';

const Item = ({info}) => {
  return (
   <div>
      <h1 className='Items-title'>Latest Products</h1>   
      <div className='Item-container'> 
         <div className='Product-card'>
            <img src={info.image} alt="" />
            <h3 className='Item-name'>{info.title}</h3>
            <p className='Item-price'>{info.price}</p>
         </div>
      </div> 
   </div>   
  )
}

export default Item;