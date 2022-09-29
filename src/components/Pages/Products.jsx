import React from 'react';
import product from '../../assets/product-heading.jpg'

const Products = () => {
  return (
    <div className='Heading-container'>
      <div className='Image-heading'>
        <img src={product} alt="Product" />
      </div>
      <div className='Centered-title'>
        <h4 className='Sub-title'>New Arrivals</h4>
        <h2 className='Main-title'>Levi Footwear</h2>
      </div>
    </div>
  )
}

export default Products;