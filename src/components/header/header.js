import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import logo from './burger.png';

const Header = (props) => {
  return (
    <header className='row'>
      <div className='logo col-md'>
        <div className='logo-img'>
          <img src={logo} alt='logo' />
        </div>
        <Link to='/' className='text-decoration-none'><h1>Get Your Burger!</h1></Link>
      </div>

      <div className='col-md-2'>
        <Link to='/order/' className='order-cart text-decoration-none'>
          <i className="icon-cart fas fa-shopping-cart"></i>
          <span className='text'>Order: {props.count}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;