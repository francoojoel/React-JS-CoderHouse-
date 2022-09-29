
import React, {useEffect, useState} from 'react';
import ItemList from '../components/Items/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebaseConfig';

export const ItemListContainer = () => {
   const [data, setData] = useState([]);
   const { categoryId } = useParams();
            
   useEffect(() => {
      const itemColecction = collection(db, 'footwear');
      const ref = categoryId
          ? query(itemColecction, where('category', '==', categoryId))
          : itemColecction;

      getDocs(ref).then((response) => {
          console.log(response.docs);
          
          const footwear = response.docs.map((prod) => {
              console.log(prod);
              return {
                  id: prod.id,
                  ...prod.data(),
              };
          });
          setData(footwear);
      });
   }, [categoryId]);  
   
  return (
   <div>
      {/*<div className='Greeting'>{greeting}</div>*/}   
      <ItemList data={data}/>   
   </div>        
  )
}

export default ItemListContainer;


   /*const getData = new Promise(resolve => {
      setTimeout(() => {
         resolve(footwear);
      }, 1000);
     });
     if(categoryId) {
         getData.then(res => setData(res.filter(footwear => footwear.category === categoryId)));
     }else {
         getData.then(res => setData(res));
     }*/