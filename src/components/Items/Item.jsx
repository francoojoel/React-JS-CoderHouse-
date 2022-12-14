import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({info}) => {
  return ( 
   <div className='Item-container'>  
      <div className='Product-card'>
         <Link className='Item-link' to={`/detail/${info.id}`}>
            <img src={info.image} alt={info.title} />
            <h3 className='Item-name'>{info.title}</h3>
            <p className='Item-price'><span>$</span>{info.price}</p>
         </Link>
      </div>
   </div> 
  )
}

export default Item;