import React, {useState, useEffect} from 'react';
import ItemDetail from '../components/ItemDetail';

const detail = {id: 1, image:"https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dwa6e387e8/products/AD_GZ7998/AD_GZ7998-1.JPG?sw=400&sh=400",
category: 'adidas', title: "Adidas NMD", price: 290};

const ItemDetailContainer = () => {
   const [data, setData] = useState({})
   useEffect(() => {
      const getData = new Promise(resolve => {
         setTimeout(() => {
            resolve(detail);
         }, 3000);
         });
         getData.then(res => setData(res));
      }, [])

  return (
    <div>
      <ItemDetail data={data}/>
    </div>
  )
}

export default ItemDetailContainer;