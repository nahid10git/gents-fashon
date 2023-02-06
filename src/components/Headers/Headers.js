import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';

const Headers = () => {
    return (
        <nav className='header-container'>
           <Link to = "/">Home</Link>
           <Link to ="/orders">Orders</Link>
           <Link to="/about">About</Link>
        </nav>
    );
};

export default Headers;