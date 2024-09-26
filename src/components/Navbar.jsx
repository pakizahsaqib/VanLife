import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>   
      <h1><Link to="/">#VANLIFE</Link></h1>
      <ul>
        <li><Link to="/signin">Host</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/vans">Vans</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
