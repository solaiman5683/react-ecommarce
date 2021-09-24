import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logo from '../../logo.png';
// import Cart from '../Cart/Cart';
import './Header.css';

const Header = () => {
    return (
        <div className='mb-5'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow py-3">
                <div className="container">
                    <a className="navbar-brand" href="#header">
                        <img width="150" className="d-inline-block align-text-top" src={logo} alt="Ema-John" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#Home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#shop">Shop</a>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Type here to Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                            <button className="btn btn-dark mx-2 d-flex fs-5 align-items-center position-relative" id="card-button">
                                <FontAwesomeIcon icon={faCartPlus} /> <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;