import React from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { useCartContext } from '../../Context/CartContext';
import { useState } from 'react';

const Form = ({ handleId }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const { cart, totalPrice, clearCart } = useCartContext();
    const total = totalPrice();

    const handleSubmit = (e) => {
        e.preventDefault();
        const order = {
            buyer: { name, phone, email },
            date: serverTimestamp(),
            cart,
            total,
        };
        const refOrden = collection(db, 'orders');
        addDoc(refOrden, order).then((res) => {
            handleId(res.id);
        });
    };

    const nameHandle = (e) => setName(e.target.value);
    const phoneHandle = (e) => setPhone(e.target.value);
    const emailHandle = (e) => setEmail(e.target.value);

    return (
        <div className='Checkout-Form'>
            <form action="" onSubmit={handleSubmit}>
                
               <input
                    type="text"
                    name="name"
                    placeholder="Full name"
                    value={name}
                    onChange={nameHandle}
                    autoComplete= 'off'        
                    required
               />

               <input 
                    type="text" 
                    name="email"
                    placeholder="E-mail Address"
                    value={email}
                    onChange={emailHandle}
                    autoComplete= 'off'       
                    required
               />

               <input
                    type="number"
                    name="phone"
                    placeholder="Phone number"
                    value={phone}
                    onChange={phoneHandle}
                    autoComplete= 'off'
                    required
               />
            <button className='Send-button' onClick={() => {clearCart()}}>Send</button>
        </form>      
      </div>
    );
};

export default Form;