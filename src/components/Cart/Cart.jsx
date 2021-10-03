import React from 'react';
import './Cart.css'

const Cart = (props) => {
    let price = 0;
    let quantity = 0;
    for (const product of props.cart) {
        price += product.price * (!product.quantity? 1: product.quantity);
        quantity = quantity + (!product.quantity ? 1 : product.quantity);
    }
    let shippingCharge = parseFloat((price * 0.02).toFixed(2));
    let totatBeforeTax = parseFloat((price + shippingCharge).toFixed(2));
    let tax = parseFloat((price * 0.15).toFixed(2));
    return (
        <div className="cart-container bg-dark text-light bg-gradient">
            <h2 className="text-center">Shopping Cart</h2>
            <hr/>
            <h4>Total Items: {quantity}</h4>
            <hr/>
            <p>Price: ${price.toFixed(2)}</p>
            <hr/>
            <p>Shipping & Handling:	${shippingCharge}</p>
            <hr/>
            <p>Total before tax: ${totatBeforeTax}</p>
            <hr/>
            <p>Estimated Tax: ${tax}</p>
            <hr/>
            <h3 className="text-warning">Total Price: ${(totatBeforeTax + tax).toFixed(2)}</h3>
            {props.children}
        </div>
    );
};

export default Cart;