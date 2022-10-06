import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, collection } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import ItemDetail from '../components/Items/ItemDetail';


const ItemDetailContainer = () => {
   const [data, setData] = useState({})
   const { detailId } = useParams();

   useEffect(() => {
      const itemColecction = collection(db, 'footwear');
      const ref = doc(itemColecction, detailId);
      getDoc(ref).then((res) => {
          setData({
              id: res.id,
              ...res.data(),
          });
      });
  }, [detailId]);

  return (
    <div>
      <ItemDetail data={data}/>
    </div>
  )
}

export default ItemDetailContainer;
