import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../product/Product';
import './Products.css';

const Products = () => {
    const [products, setProduct] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])

    const handleClick = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
    }


    return (
        <div className="container d-flex position-relative">
            <div className="row row-cols-1 row-cols-md-2 g-4 w-75 me-2">
                {products.map(product => <Product
                    key={product.key}
                    products={product}
                    event={handleClick}
                ></Product>)}
            </div>
            <div className="w-25">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Products;