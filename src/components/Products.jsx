import React from 'react';
import product from '../assets/product-heading.jpg'

const Products = () => {
  return (
    <div className='Heading-container'>
      <img className='Heading-image' src={product} alt="Products" />
      <div className='Centered-title'>
        <h4 className='Sub-title'>New Arrivals</h4>
        <h2 className='Main-title'>Levi Footwear</h2>
      </div>
    </div>
  )
}

export default Products;