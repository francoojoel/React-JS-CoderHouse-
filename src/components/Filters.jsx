import React from 'react';

const Filters = () => {
  return (
   <div key={categoryId} className='filters'>
      <h3 className='Filters-title'>Categories: </h3>
      <Link to={`/category/${categoryId}`}>Converse</Link>
      <Link to={`/category/${categoryId}`}>Nike</Link>
      <Link to={`/category/${categoryId}`}>Adidas</Link>
   </div>
  )
}

export default Filters;