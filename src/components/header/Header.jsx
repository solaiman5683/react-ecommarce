import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import logo from '../../logo.png';
// import Cart from '../Cart/Cart';
import './Header.css';

const Header = () => {
    const [products] = useProducts();
    const [cart] = useCart(products);
    let count = 0;
    cart.forEach(c => count+=c.quantity)
    return (
        <div className='mb-5'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow py-3">
                <div className="container">
                    <Link to="/"  className="navbar-brand">
                        <img width="150" className="d-inline-block align-text-top" src={logo} alt="Ema-John" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/shop"  className="nav-link active">Shop</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/review"  className="nav-link">Order Review</Link>
                            </li>
                        </ul>
                        <div className="d-flex">

                            {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                            <button className="btn btn-dark mx-2 d-flex fs-5 align-items-center position-relative" id="card-button">
                                <FontAwesomeIcon icon={faCartPlus} /> <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{count}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;