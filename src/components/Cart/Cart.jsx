import React, { useContext, useEffect } from 'react';
import { MyContext } from '../../App';
import './Cart.css'

const Cart = (props) => {
    let price = 0;
    let quantity = 0;
    const [cartQuantity, setCartQuantity] = useContext(MyContext)
    for (const product of props.cart) {
        price += product.price * (!product.quantity? 1: product.quantity);
        quantity = quantity + (!product.quantity ? 1 : product.quantity);
    }
    
    useEffect(() => {
        setCartQuantity(quantity);
    },[quantity,setCartQuantity])

    let shippingCharge = parseFloat((price * 0.02).toFixed(2));
    let totatBeforeTax = parseFloat((price + shippingCharge).toFixed(2));
    let tax = parseFloat((price * 0.15).toFixed(2));
    return (
        <div className="cart-container bg-dark text-light bg-gradient">
            <h2 className="text-center">Shopping Cart</h2>
            <hr/>
            <h4>Total Items: {cartQuantity}</h4>
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