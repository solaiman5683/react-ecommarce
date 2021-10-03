import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { deleteFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from './ReviewItem';

const OrderReview = () => {
    const [products] = useProducts();
    const [cart,setCart] = useCart(products);
    const handleClick = (key) => {
        const newCart = cart.filter(product => product.key !== key);
        deleteFromDb(key);
        setCart(newCart);
    }
    return (
        <div>
            <div className="container">
                <div className='d-flex position-relative'>
                <div className="row row-cols-1 g-4 w-75 me-2 px-5">
                    {cart.map(product=><ReviewItem product={product} key={product.key} handleClick={handleClick}></ReviewItem>)}
                </div>
                <div className="w-25">
                    <Cart cart={cart}></Cart>
                </div>
                </div>
                
            </div>
        </div>
    );
};

export default OrderReview;