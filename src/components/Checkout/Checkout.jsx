import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';

const Checkout = () => {
    const [orderId, setOrderId] = useState('');

    const handleId = (orderNumber) => {
        setOrderId(orderNumber);
    };

    if (orderId) {
        return (
            <div className='Checkout-container'>
                <p className='Order-message'>Thanks for your buy, here is your purchase ID: <b>{orderId}</b></p>
                <Link className='Hover-link' to='/'>
                    <button className='Hover-button'>
                        <span>Back to store</span>
                    </button>
                </Link> 
            </div>       
        );
    }
    return (
        <div className='Checkout-container'>
            <h2 className='Checkout-title'>Payment Details</h2>
            <Form handleId={handleId} />
        </div>
    );
};

export default Checkout;
