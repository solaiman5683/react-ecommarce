import React from 'react';

const ReviewItem = (props) => {
    const { name, price, quantity, key } = props.product;
    return (
        <div>
            <div className="shadow p-4 rounded">
                <h2>Name: {name}</h2>
                <h4>Price: {price}</h4>
                <p>Quantity: {quantity}</p>
                <button className="btn btn-danger" onClick={() => props.handleClick(key)}>Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;