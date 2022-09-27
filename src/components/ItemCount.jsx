import React, { useState, useEffect } from 'react';

const ItemCount = ({initial, stock, onAdd}) => {
  const [count, setCount] = useState(parseInt(initial));

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  
  useEffect(() => {
    setCount(parseInt(initial));
  }, [initial])
      

  return (
    <div className='Count-container'>
        <button className='Counter-button' disabled={count >= stock} onClick={increase}>+</button>
        <h3 className='Counter'>{count}</h3>
        <button className='Counter-button' disabled={count <= 1} onClick={decrease}>-</button>
        <div className='Add-cart-container'>
            <button className='Cart-button' disabled={stock <= 0} onClick ={() => onAdd(count)}>Add to cart</button>
        </div>
    </div>
  )
}

export default ItemCount;                    