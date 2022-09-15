import React from 'react';
import { Link } from 'react-router-dom';


const Filters = (categoryId) => {
  return (
   <div key={categoryId} className='filters'>
      <h3 className='Filters-title'>Brand: </h3>
      <Link className='Brand-filter' to='/category/converse'>Converse</Link>
      <Link className='Brand-filter' to='/category/nike'>Nike</Link>
      <Link className='Brand-filter' to='/category/adidas'>Adidas</Link>
   </div>
  )
}

export default Filters;