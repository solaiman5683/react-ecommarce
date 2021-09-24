import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../product/Product';
import Header from '../header/Header'
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import './Shop.css';

const Shop = () => {
    const [products, setProduct] = useState([])
    const [cart, setCart] = useState([])
    const [searchProduct, setSearchProduct] = useState([])

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
            .then(res => res.json())
            .then(data => {
                setSearchProduct(data);
                setProduct(data);
            });
    }, [])

    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart();
            const newCart = []
            for (const key in savedCart) {
                const addedProduct = products.find(product => product.key === key);
                if (addedProduct) {
                    addedProduct.quantity = savedCart[key];
                    newCart.push(addedProduct)
                }
            }
            setCart(newCart);
        }
    }, [products])

    const handleClick = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product.key)
    }

    const handleSearch = (event) => {
        const searchProducts = products.filter(product => product.name.toLowerCase().includes(event.target.value));
        setSearchProduct(searchProducts);
    }

    return (
        <>
            <Header search={handleSearch}></Header>
            <div className="container d-flex position-relative">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 w-75 me-2">
                    {searchProduct.map(product => <Product
                        key={product.key}
                        products={product}
                        event={handleClick}
                    ></Product>)}
                </div>
                <div className="w-25">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </>
    );
};

export default Shop;