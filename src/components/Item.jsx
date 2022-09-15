import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({info}) => {
  return ( 
   <div className='Item-container'>
      <div className='Product-card'>
         <img src={info.image} alt={info.title} />
         <Link className='Item-link' to={`/detail/${info.id}`}>
            <h3 className='Item-name'>{info.title}</h3>
            <p className='Item-price'><b>${info.price}</b></p>
         </Link>
      </div>
   </div> 
  )
}

export default Item;