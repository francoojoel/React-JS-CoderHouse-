import React from 'react';
import { useState } from 'react';
import Form from './Form';

const Checkout = () => {
    const [orderId, setOrderId] = useState('');

    const handleId = (orderNumber) => {
        setOrderId(orderNumber);
    };

    if (orderId) {
        return (
            <div className='Checkout-container'>
                <p className='Order-message'>Thanks for your buy, here is your order ID: <b>{orderId}</b></p> 
            </div>

                
        );
    }

    return (
        <div className='Checkout-container'>
            <Form handleId={handleId} />
        </div>
    );
};

export default Checkout;
