import React from 'react';
import Item from './Item';

const ItemList = ({data = []}) => {
  return (
      data.map(footwear => <Item key={footwear.id} info={footwear} />) 
  )
}

export default ItemList;