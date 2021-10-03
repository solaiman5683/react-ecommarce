import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../product/Product';
import { addToDb } from '../../utilities/fakedb';
import './Shop.css';
import useCart from '../../hooks/useCart';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProduct] = useState([])
    const [searchProduct, setSearchProduct] = useState([])
    const [cart, setCart] = useCart(products)
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
            .then(res => res.json())
            .then(data => {
                setSearchProduct(data);
                setProduct(data);
            });
    }, [])

    const handleClick = (product) => {
        let newCart = [];
        const exists = cart.find(pd => pd.key === product.key);
        if (exists) {
            const rest = cart.filter(pd => pd.key !== product.key);
            product.quantity += 1;
            newCart = [...rest, product]
        } else {
            product.quantity = 1;
            newCart = [...cart, product]
        }
        setCart(newCart)
        addToDb(product.key)
    }

    const handleSearch = (event) => {
        const searchProducts = products.filter(product => product.name.toLowerCase().includes(event.target.value));
        setSearchProduct(searchProducts);
    }

    return (
        <>

            <div className="container">
                <input className="form-control my-5 p-3" type="search" placeholder="Type here to Search" aria-label="Search" onChange={handleSearch} />
                <div className='d-flex position-relative'>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 w-75 me-2">
                        {searchProduct.map(product => <Product
                            key={product.key}
                            products={product}
                            event={handleClick}
                        ></Product>)}
                    </div>
                    <div className="w-25">
                        <Cart cart={cart}>
                            <hr />
                            <Link to="/review" className="btn btn-warning d-block">Order Review</Link>
                        </Cart>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Shop;