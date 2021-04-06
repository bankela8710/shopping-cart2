import React, { Component, useState,useContext } from 'react';
import { FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {DataContext} from './DataProvider';

export default function Header() {

    const [menu, setMenu] = useState(false);
    const value= useContext(DataContext);
    const [cart]= value.cart;

    const toggleMenu = () => {
        setMenu(!menu)
    }

    const styleMenu = {
        left: menu ? 0 : "-100%"
    }
    return (
        <header>
            <div className="menu" onClick={toggleMenu}>
                <FaBars />
            </div>
            <div className="logo">
                <h1><Link to="/products">Citizen</Link></h1>
            </div>
            <ul style={styleMenu}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li className="menu" onClick={toggleMenu}>
                    <FaTimes />
                </li>
            </ul>
            <div className="cart-icon">
                <span>{cart.length}</span>
                <Link to="/cart">
                <FaShoppingCart />
                </Link>
            </div>

        </header>
    )
}

