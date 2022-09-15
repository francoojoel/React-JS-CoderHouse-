
import React, {useEffect, useState} from 'react';
import ItemList from '../components/ItemList';
import { useParams } from 'react-router-dom';

const footwear = [
   {id: 1, image: "https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw3e1ce252/products/CO_157196C/CO_157196C-1.JPG?sw=400&sh=400",
   category: 'converse', title:"Converse Chuck Taylor All Star Core OX", price: 140},
   {id: 2, image: "https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw41c09c3f/products/CO_157002C/CO_157002C-1.JPG?sw=400&sh=400", 
   category: 'converse', title: "Converse Chuck Taylor All Star Leather", price: 165},
   {id: 3, image: "https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw42370dbb/products/NI_DO2760-220/NI_DO2760-220-1.JPG?sw=400&sh=400", 
   category: 'nike', title: "Nike Airforce One Gore Tex", price: 430},
   {id: 4, image: "https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw7c433248/products/NI_DC5421-002/NI_DC5421-002-1.JPG?sw=400&sh=400", 
   category: 'nike', title: "Nike Air Max Intrlk", price: 280},
   {id: 5, image: "https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dwabbcb439/products/NI_CI0919-004/NI_CI0919-004-1.JPG?sw=400&sh=400", 
   category: 'nike', title: "Nike Airforce One Shadow", price: 290},
   {id: 6, image: "https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dwec28aab0/products/AD_GZ8213/AD_GZ8213-1.JPG?sw=400&sh=400", 
   category: 'adidas', title: "Adidas Lite Racer ByD 2.0", price: 170},
   {id: 7, image: "https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dwce2b59db/products/NI_553558-163/NI_553558-163-1.JPG?sw=400&sh=400",
   category: 'nike', title: "Nike Air Jordan One Low", price: 280},
   {id: 8, image: "https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw3fe30941/products/NI_DH3162-001/NI_DH3162-001-1.JPG?sw=400&sh=400",
   category: 'nike', title: "Nike Court Legacy", price: 180},
   {id: 9, image: "https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dwd56f2c22/products/NI_DH3162-100/NI_DH3162-100-1.JPG?sw=400&sh=400", 
   category: 'nike', title: "Nike Court Legacy", price: 180},
   {id: 10, image: "https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw6122f4c6/products/AD_GZ3529/AD_GZ3529-1.JPG?sw=400&sh=400", 
   category: 'adidas', title: "Adidas Multix", price: 195},  
]

export const ItemListContainer = () => {
   const [data, setData] = useState([]);
   const { categoryId } = useParams();

   useEffect(() => {
     const getData = new Promise(resolve => {
      setTimeout(() => {
         resolve(footwear);
      }, 2000);
     });
     if(categoryId) {
         getData.then(res => setData(res.filter(footwear => footwear.category === categoryId)));
     }else {
         getData.then(res => setData(res));
     }
   }, [categoryId])                  
   
   
  return (
   <div>
      {/*<div className='Greeting'>{greeting}</div>*/}   
      <ItemList data={data}/>   
   </div>        
  )
}

export default ItemListContainer;
