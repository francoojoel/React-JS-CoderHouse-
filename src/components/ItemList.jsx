import React from 'react';
import Item from './Item';

const ItemList = ({data = []}) => {
  return (
    <div>
      <h1 className='Items-title'>Latest Products</h1>
      {data.map(footwear => <Item key={footwear.id} info={footwear} />)}
    </div>
  )
}

export default ItemList;