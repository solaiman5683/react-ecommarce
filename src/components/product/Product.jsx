import React from 'react';


const Product = (props) => {

    const { name, img, price, stock} = props.products;
    return (
        <div className="col">
            <div className="card h-100 shadow">
                <img src={img} className="card-img-top p-3" alt="..." />
                <div className="card-body">
                    <p className="card-text fs-4">Price: ${price}</p>
                    <h4 className="card-title">{name}</h4>
                </div>
                <div className="card-footer text-center">
                    <p>Product on stock: { stock }</p>
                    <a href="#a" className="d-block fs-5 btn btn-dark bg-gradient" onClick={() => props.event(props.products)}>Add to Cart</a>
                </div>
            </div>
        </div>
    );
};

export default Product;