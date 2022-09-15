import React from 'react';
import Filters from './Filters';
import Item from './Item';

const ItemList = ({data = []}) => {
  return (
    <div>
      <h1 className='Items-title'>Latest Products</h1>
      <Filters />
      {data.map(footwear => <Item key={footwear.id} info={footwear} />)}
    </div>
  )
}

export default ItemList;