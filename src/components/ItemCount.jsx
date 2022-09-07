import React, { useState } from 'react';

const ItemCount = ({initial, stock, onAdd}) => {
   const [count, setCounter] = useState(initial);

   const sumar = () => setCounter(count + 1);
   const restar = () => setCounter(count - 1);
   
  return (
    <div className='Count-container'>
        <button className='Counter-button' disabled={count >= stock} onClick={sumar}>+</button>
        <h3 className='Counter'>{count}</h3>
        <button className='Counter-button' disabled={count <= initial} onClick={restar}>-</button>
        <div className='Add-cart-container'>
            <button className='Cart-button' disabled={count <= 0} onClick={onAdd}>Agregar al carrito</button>
        </div>
    </div>
  )
}

export default ItemCount;