import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/products" className="nav-link">Produtos</Link>
                </li>
            </ul>
        </nav>
    );
}
export default Header;