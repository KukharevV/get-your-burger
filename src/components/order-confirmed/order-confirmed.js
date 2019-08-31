import React from 'react';
import './order-confirmed.css';
import { Link } from 'react-router-dom';

const OrderConfirmed = () => {
  return (
    <div className='container'>
      <h3>Thank you for order!</h3>
      <h4>Have a good meal!</h4>
      <Link to='/' className='btn btn-danger float-right'>Menu</Link>
    </div>
  );
}

export default OrderConfirmed;