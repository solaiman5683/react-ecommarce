import React from 'react';
import { Link } from 'react-router-dom';
import { clearTheCart } from '../../utilities/fakedb';

const PlaceOrder = () => {
    clearTheCart();
    return (
        <div className='text-center'>
            <h1 className='alert alert-success' role="alert">Order Placed Successfully</h1>
            <Link to="/" className='btn btn-primary'>Buy Anouther Product</Link>
            
        </div>
    );
};

export default PlaceOrder;